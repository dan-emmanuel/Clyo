import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/modules/App/App.module';
import { ConfigService } from 'src/modules/Config/Config.service';
import { Logger } from '@nestjs/common';
import { ENVKEYS } from 'src/modules/Config/Constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Clyo')
    .setDescription('Clyo Backend API contract')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get(ENVKEYS.APPPORT));
  Logger.log(`Application is running on: ${await app.getUrl()}`);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
