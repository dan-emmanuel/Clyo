import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ENVKEYS } from 'src/modules/Config/Constants';

export const getTypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  console.log(
    Boolean(parseInt(configService.get<string>(ENVKEYS.MYSQL_SYNCDB))),
  );
  return {
    type: 'mysql',
    host: configService.get<string>(ENVKEYS.MYSQL_HOST),
    port: +configService.get<string>(ENVKEYS.MYSQL_PORT),
    username: configService.get<string>(ENVKEYS.MYSQL_USER),
    password: configService.get<string>(ENVKEYS.MYSQL_ROOT_PASSWORD),
    database: configService.get<string>(ENVKEYS.MYSQL_DATABASE),
    extra: {
      charset: 'utf8mb4_unicode_ci',
    },
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../migrations/*.{js,ts}'],

    synchronize: Boolean(
      parseInt(configService.get<string>(ENVKEYS.MYSQL_SYNCDB)),
    ), // set to false in production
    logging: true,
  };
};
