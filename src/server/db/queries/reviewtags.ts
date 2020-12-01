import { Query } from "../";
import { DbCannedResp, ReviewTagPostModel } from "../models";

const createReviewTag = (reviewid: number, tagid: number) =>
  Query<DbCannedResp>("INSERT INTO reviewtags SET ?", [reviewid, tagid]);
// const createReviewTag = (reviewTagDTO: ReviewTagPostModel) => Query<DbCannedResp>('INSERT INTO reviewtags SET ?', reviewTagDTO);

export default {
  createReviewTag,
};
