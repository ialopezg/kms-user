import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';

import { AppController } from './controllers';
import { AppService } from './services';
import { DbModule } from '../db';
import { UserModule } from '../user';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      envFilePath: !process.env.APP_MODE
        ? process.env.APP_MODE === 'production'
          ? resolve(process.cwd(), '../../..', '.env')
          : resolve(process.cwd(), '../../..', '.env.development')
        : null, // Docker launch
    }),
    DbModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
