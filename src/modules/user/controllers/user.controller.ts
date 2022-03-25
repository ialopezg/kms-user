import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { PageOptionsDto } from '../../common/dtos';
import { UserCreateDto } from '../dtos';
import { UserService } from '../services';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @MessagePattern('user_create')
  async createUser(params: UserCreateDto): Promise<any> {
    if (!params) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_create_bad_request',
      };
    }

    return {
      status: HttpStatus.CREATED,
      message: 'user_create_success',
      user: params,
    };
  }

  @MessagePattern('user_get')
  async getUsers(params: PageOptionsDto): Promise<any> {
    if (!params) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_get_bad_request',
      };
    }

    return {
      status: HttpStatus.CREATED,
      message: 'user_get_success',
      user: params,
    };
  }

  @MessagePattern('user_get_by_identifier')
  async getUser(identifier: string): Promise<any> {
    if (!identifier) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_get_by_identifier_bad_request',
      };
    }

    return {
      status: HttpStatus.CREATED,
      message: 'user_get_success',
      user: identifier,
    };
  }

  @MessagePattern('user_update')
  async updateUser(uuid: string): Promise<any> {
    if (!uuid) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_update_bad_request',
      };
    }

    return {
      status: HttpStatus.CREATED,
      message: 'user_update_success',
      user: uuid,
    };
  }

  @MessagePattern('user_delete')
  async deleteUser(uuid: string): Promise<any> {
    if (!uuid) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_delete_bad_request',
      };
    }

    return {
      status: HttpStatus.CREATED,
      message: 'user_delete_success',
      user: uuid,
    };
  }
}
