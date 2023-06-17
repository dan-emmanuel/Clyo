import { AppModule } from 'modules/App/App.module';
import { TransactionsModule } from 'modules/Transactions/Transactions.module';

export const Router = [
  {
    path: '/',
    module: AppModule,
    children: [
      {
        path: '/transactions',
        module: TransactionsModule,
      },
    ],
  },
];
