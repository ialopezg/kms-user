import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './modules/app';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('USER_SERVICE_PORT'),
    },
  } as TcpOptions);

  await app.listen();
}

void bootstrap();
