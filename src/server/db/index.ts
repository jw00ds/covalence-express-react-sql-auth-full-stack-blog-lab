import * as mysql from "mysql";
import reviews from "./queries/reviews";
import users from "./queries/users";
import tags from "./queries/tags";
import reviewtags from "./queries/reviewtags";
import config from "../config";
import tokens from "./queries/tokens";

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, vals?: any) => {
  return new Promise<T>((resolve, reject) => {
    const sql = mysql.format(query, vals);
    console.log(sql);
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};

export default {
  tags,
  reviews,
  reviewtags,
  users,
  tokens,
};
