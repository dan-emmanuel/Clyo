import { ConfigService } from './../config/config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from 'modules/Typeorm/Typeorm.config';
import { AppController } from 'modules/app/app.controller';
import { AppService } from 'modules/app/app.service';
import { ConfigModule } from 'modules/config/Config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
