import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { IReview } from "../utils/types";
import service from "../utils/api-service";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [review, setReview] = useState<IReview>(null);
  const history = useHistory();

  useEffect(() => {
    service(`/api/reviews/${id}`).then((reviewRes) => setReview(reviewRes));
  }, [id]);

  return (
    <main className="container">
      <section className="row justify-content-center mt-3">
        <div className="col-12">
          <div
            onClick={() => history.push(`/admin/${review?.Review_ID}`)}
            className="card shadow-lg"
          >
            <div className="card-body">
              <h2 className="card-title">{review?.Review_Title}</h2>
              <h3 className="card-subtitle mb-2 text-muted">
                By @{review?.Review_Author}
              </h3>
              <img
                src={review?.Review_Img}
                alt="Trail img"
                className="img-fluid"
              />
              <p className="card-text">{review?.Review_Commentary}</p>
              Tags:
              <p className="card-text text-muted">
                {review?.Review_Tags
                  ? review?.Review_Tags.split(";;").map((tagName) => (
                      <span
                        key={tagName}
                        className="badge badge-pill badge-secondary mr-2"
                      >
                        #{tagName}
                      </span>
                    ))
                  : "None"}
              </p>
              <div className="d-flex justify-content-end">
                <Link
                  to={`/admin/${review?.Review_ID}`}
                  className="btn btn-link"
                >
                  Admin Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
