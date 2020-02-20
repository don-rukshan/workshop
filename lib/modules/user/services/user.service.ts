import users from "../shemas/user.schema";
import { IUser } from "../models/user.model";

export class UserServices {
  public createUser(user_detail: IUser, callback: any) {
    const user = new users(user_detail);
    user.save(callback);
  }

  public getUser(user_names: String, callback: Function) {
    const query = { user_name: user_names };
    users.findOne(query, callback);
  }
}
