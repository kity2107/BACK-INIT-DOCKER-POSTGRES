import { DataSource } from 'typeorm';
import config from '../config/config';
import User from './entities/User';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.DB.HOST,
    port: config.DB.PORT,
    username: config.DB.USER,
    password: config.DB.PASS,
    database: config.DB.NAME,
    // entities: ['src/database/entities/*.ts'],
    entities: [User],
    synchronize: true,
    logging: false,
});

AppDataSource.initialize()
    .then(() => console.log('✅ Postgres conection success'))
    .catch((error) => console.log('⚠️ Postgres conection Fail', error));

export default AppDataSource;
