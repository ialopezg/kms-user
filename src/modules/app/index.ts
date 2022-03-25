import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';

import { AppController } from './controllers';
import { AppService } from './services';
import { DbModule } from '../db';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: resolve(process.cwd(), '../../..', '.env'),
    }),
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
