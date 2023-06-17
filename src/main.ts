import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/App/App.module';
import { ConfigService } from './modules/Config/Config.service';
import { Logger } from '@nestjs/common';
import { ENVKEYS } from './modules/Config/Config.constants';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get(ENVKEYS.APPPORT));
  Logger.log(`Application is running on: ${await app.getUrl()}`);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
