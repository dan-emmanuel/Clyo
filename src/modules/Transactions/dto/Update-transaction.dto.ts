import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './Create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
