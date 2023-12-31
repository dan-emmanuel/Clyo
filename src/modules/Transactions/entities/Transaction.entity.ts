import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransactionItem } from './TransactionHeader.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

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

  @OneToMany(
    () => TransactionItem,
    (transactionItem) => transactionItem.transactionId,
  )
  transactionItems: TransactionItem[];
}
