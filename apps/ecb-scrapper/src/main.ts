import { NestFactory } from '@nestjs/core';
import { EcbScrapperModule } from './ecb-scrapper.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(EcbScrapperModule);
  app.listen();
}
bootstrap();
