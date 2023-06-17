import { Module } from '@nestjs/common';
import { TransactionsService } from './Transactions.service';
import { TransactionsController } from './Transactions.controller';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
