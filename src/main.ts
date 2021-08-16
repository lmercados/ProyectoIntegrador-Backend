import { APP_FILTER, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  console.log(app.getHttpServer);
  await app.listen(AppModule.port);
}
bootstrap();
