import { Exclude } from 'class-transformer';
import { AbstractEntity } from 'src/modules/common/entities';
import { Column, Entity, UpdateDateColumn } from 'typeorm';

import { UserDto } from '../dtos';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName?: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  motherName?: string;

  @Column({ nullable: true })
  birthdate?: Date;

  @Column({ unique: true, nullable: true })
  phone?: string;

  @Column({ unique: true, nullable: true })
  mobile?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  avatar?: string;

  @UpdateDateColumn({ type: 'timestamp with time zone', nullable: true })
  @Exclude()
  updatedAt: Date;

  dtoClass = UserDto;
}
