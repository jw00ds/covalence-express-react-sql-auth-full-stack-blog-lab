import { Query } from "../index";
import { ReviewPullModel, DbCannedResp } from "../models";

const retrieveAllReviews = () =>
  Query<ReviewPullModel[]>(
    "SELECT reviews.id AS Review_ID, riders.username AS Review_Author, reviews.image_url AS Review_Img, reviews.title AS Review_Title, reviews.commentary AS Review_Commentary, GROUP_CONCAT(tags.name SEPARATOR ';;') AS Review_Tags FROM reviews RIGHT JOIN riders ON reviews.riderid = riders.id LEFT JOIN reviewtags ON reviews.id = reviewtags.reviewid LEFT JOIN tags ON tags.id = reviewtags.tagid GROUP BY reviews.id;"
  );

const retrieveOneReview = (id: number) =>
  Query<ReviewPullModel[]>(
    "SELECT reviews.id AS Review_ID, riders.username AS Review_Author, reviews.image_url AS Review_Img, reviews.title AS Review_Title, reviews.commentary AS Review_Commentary, GROUP_CONCAT(tags.name SEPARATOR ';;') AS Review_Tags FROM reviews RIGHT JOIN riders ON reviews.riderid = riders.id LEFT JOIN reviewtags ON reviews.id = reviewtags.reviewid LEFT JOIN tags ON tags.id = reviewtags.tagid WHERE reviews.id = ? GROUP BY reviews.id;",
    id
  );

const createReview = (
  title: string,
  commentary: string,
  image_url: string,
  riderid: number
) =>
  Query<DbCannedResp>(
    "INSERT INTO reviews(title, commentary, image_url, riderid) VALUES(?, ?, ?, ?)",
    [title, commentary, image_url, riderid]
  );

const reviseReview = (
  title: string,
  commentary: string,
  image_url: string,
  id: number
) =>
  Query<DbCannedResp>(
    "UPDATE reviews SET title = ?, commentary = ?, image_url = ? WHERE id = ?",
    [title, commentary, image_url, id]
  );

const destroyReview = (id: number) =>
  Query<DbCannedResp>("DELETE FROM reviews WHERE id = ?", id);

export default {
  retrieveAllReviews,
  retrieveOneReview,
  createReview,
  reviseReview,
  destroyReview,
};
