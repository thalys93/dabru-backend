import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'root',
  port: 5432,
  host: 'localhost',
  database: 'dabru_atelie',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
