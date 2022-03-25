import { UserDto } from '../dtos';

export interface IUserCreateResponse {
  status: number;
  message: string;
  user?: UserDto;
  errors?: null;
}
