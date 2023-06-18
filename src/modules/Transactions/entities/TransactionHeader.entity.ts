import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Transaction } from 'src/modules/Transactions/entities/Transaction.entity';

@Entity()
export class TransactionItem {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'int' })
  @ApiProperty()
  transactionId: number;

  @Column({ type: 'decimal' })
  @ApiProperty()
  amount: number;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  userId: number;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: Date;
}
