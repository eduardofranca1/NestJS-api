import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'multi-form-api',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        // logging: true,
      });

      return dataSource.initialize();
    },
  },
];
