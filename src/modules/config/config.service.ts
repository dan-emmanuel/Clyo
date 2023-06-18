import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    this.envConfig = dotenv.config().parsed;
  }

  get(key: string): string {
    console.log(key);
    return this.envConfig[key];
  }
}
