import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SnakeNamingStrategy } from './strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('APP_DB_USER'),
        password: configService.get('APP_DB_PASSWORD'),
        database: configService.get('APP_DB_NAME'),
        entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
        namingStrategy: new SnakeNamingStrategy(),
        subscribers: [],
        synchronize: configService.get('APP_MODE') === 'development',
        logging: configService.get('APP_MODE') === 'development',
      }),
    }),
  ],
})
export class DbModule {}
