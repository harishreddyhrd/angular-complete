import { RegisterResponse } from "./register-response";

export interface LoginResponse extends RegisterResponse {
  registered: boolean;
}
