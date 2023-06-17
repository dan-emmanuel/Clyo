import { ConfigService } from '../Config/Config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from 'modules/Transactions/Transactions.module';
import { getTypeOrmConfig } from 'modules/Typeorm/Typeorm.config';
import { AppController } from 'modules/App/App.controller';
import { AppService } from 'modules/App/App.service';
import { ConfigModule } from 'modules/Config/Config.module';
import { RouterModule } from 'nest-router';
import { Router } from 'modules/Config/Router';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RouterModule.forRoutes(Router),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
