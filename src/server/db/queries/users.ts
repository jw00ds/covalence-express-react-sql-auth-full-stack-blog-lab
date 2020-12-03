import { Query } from "../";
import type { TUsers, DbCannedResp } from "../models";

const retrieveAllUsers = () => Query<TUsers[]>("SELECT * FROM riders");

const retrieveOneUser = (id: number) =>
  Query<TUsers[]>("SELECT * FROM riders WHERE id = ?", id);

const createUser = (newUserDTO: TUsers) =>
  Query<DbCannedResp>("INSERT INTO riders SET ?", newUserDTO);

const reviseUser = (user: TUsers, id: number) =>
  Query<DbCannedResp>("UPDATE riders SET ? WHERE id = ?", [user, id]);

const destroyUser = (id: number) =>
  Query<DbCannedResp>("DELETE FROM riders WHERE id = ?", id);

const findUser = (col: string, val: string | number) =>
  Query<TUsers[]>("SELECT * FROM riders WHERE ?? = ?", [col, val]);

export default {
  retrieveAllUsers,
  retrieveOneUser,
  createUser,
  reviseUser,
  destroyUser,
  findUser,
};
