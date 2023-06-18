import { AppModule } from 'src/modules/App/App.module';
import { TransactionsModule } from 'src/modules/Transactions/Transactions.module';

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
