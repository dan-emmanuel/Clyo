import { DynamicModule, Module, Global } from '@nestjs/common';
import { ConfigService } from 'src/modules/Config/Config.service';

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
