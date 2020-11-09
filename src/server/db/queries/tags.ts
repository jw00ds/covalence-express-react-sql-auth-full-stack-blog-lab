import { Query } from '../index'
import { TagPullModel, DbCannedResp } from '../models';

const retrieveAllTags = () => Query<TagPullModel[]>('SELECT tags.name AS Review_Tag, tags.id AS Review_Tag_ID FROM tags;');

const retrieveOneTag = (id: number) => Query<TagPullModel[]>('SELECT tags.name AS Review_Tag, tags.id AS Review_Tag_ID FROM tags WHERE tags.id = ?;', id);

const createTag = (tagName: string) => Query<DbCannedResp>('INSERT INTO tags SET ?', tagName);

export default {
    retrieveAllTags,
    retrieveOneTag,
    createTag
}