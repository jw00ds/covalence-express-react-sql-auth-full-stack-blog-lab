import { Query } from "../";
import type { TTokens, DbCannedResp } from "../models";
import type { IPayload } from "../../utils/interfaces";

const retrieveAllTokens = () => Query<TTokens[]>("SELECT * FROM tokens");

const retrieveOneToken = (id: number) =>
  Query<TTokens[]>("SELECT * FROM tokens WHERE id = ?", id);

const createToken = (token: IPayload) => {
  delete token.role;
  return Query<DbCannedResp>("INSERT INTO tokens SET ?", token);
};

const reviseToken = (jwt: string, id: number) => Query<DbCannedResp>('UPDATE tokens SET jwt = ? WHERE id = ?', [jwt, id]);

const destroyToken = (id: number) =>
  Query<DbCannedResp>("DELETE FROM tokens WHERE id = ?", id);

export default {
  retrieveAllTokens,
  retrieveOneToken,
  createToken,
  reviseToken,
  destroyToken,
};
