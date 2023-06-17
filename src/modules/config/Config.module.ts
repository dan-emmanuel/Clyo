import { DynamicModule, Module, Global } from '@nestjs/common';
import { ConfigService } from 'modules/config/config.service';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(): DynamicModule {
    return {
      module: ConfigModule,
      providers: [ConfigService],
      exports: [ConfigService],
    };
  }
}
