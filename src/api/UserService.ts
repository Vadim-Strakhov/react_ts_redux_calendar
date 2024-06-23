import { IUser } from "@src/models/IUser";
import axios, { AxiosResponse } from "axios";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>("/react_ts_redux_calendar/users.json");
  }
}
