import { Query } from '../';
import { DbCannedResp, ReviewTagPostModel } from '../models';

const createReviewTag = (reviewId: number, tagId: number) => Query<DbCannedResp>('INSERT INTO reviewtags SET ?', [reviewId, tagId]);
// const createReviewTag = (reviewTagDTO: ReviewTagPostModel) => Query<DbCannedResp>('INSERT INTO reviewtags SET ?', reviewTagDTO);

export default {
    createReviewTag
}