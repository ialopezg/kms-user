import { AbstractDto } from 'src/modules/common/dtos';
import { UserEntity } from '../entities';

export class UserDto extends AbstractDto {
  readonly firstName: string;

  readonly middleName?: string;

  readonly lastName: string;

  readonly motherName?: string;

  readonly birthdate?: Date;

  readonly phone?: string;

  readonly mobile?: string;

  readonly address?: string;

  readonly avatar?: string;

  constructor(user: UserEntity) {
    super(user);

    this.firstName = user.firstName;
    this.middleName = user?.middleName;
    this.lastName = user.lastName;
    this.motherName = user?.motherName;
    this.birthdate = user?.birthdate;
    this.phone = user?.phone;
    this.mobile = user?.mobile;
    this.address = user?.address;
  }
}
