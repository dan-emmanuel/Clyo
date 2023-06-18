import { ConfigService } from '../Config/Config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from 'src/modules/Transactions/Transactions.module';
import { getTypeOrmConfig } from 'src/modules/Typeorm/Typeorm.config';
import { AppController } from 'src/modules/App/App.controller';
import { AppService } from 'src/modules/App/App.service';
import { ConfigModule } from 'src/modules/Config/Config.module';
import { RouterModule } from 'nest-router';
import { Router } from 'src/modules/Config/Router';

const typeormSync = false;

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
