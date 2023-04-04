import config from './config/config';
import AppDataSource from './database/index';

import { server } from './app';

const startServer = async () => {
    try {
        AppDataSource;
        server.listen(config.PORT, () => {
            console.log(`⚡️[server]: Server is running at port: ${config.PORT}`);
        });
    } catch (err) {
        console.error('🔥 Server couldn`t start:', err);
    }
};

startServer();
