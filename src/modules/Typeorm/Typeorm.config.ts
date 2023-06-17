import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ENVKEYS } from 'modules/Config/Config.constants';

export const getTypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get<string>(ENVKEYS.MYSQL_HOST),
  port: configService.get<number>(ENVKEYS.MYSQL_PORT),
  username: configService.get<string>(ENVKEYS.MYSQL_USER),
  password: configService.get<string>(ENVKEYS.MYSQL_ROOT_PASSWORD),
  database: configService.get<string>(ENVKEYS.MYSQL_DATABASE),
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  entities: [], // add your entities here
  synchronize: true, // set to false in production
  logging: true,
});
