require('dotenv').config()

interface CONFIG {
  APP_ENV: string
  PORT: number
  DB: {
    TYPE: string
    HOST: string
    NAME: string
    PASS: string
    USER: string
    PORT: number
    SYNC: boolean
    LOG: boolean
  }
}

const config: CONFIG = {
  APP_ENV: process.env.APP_ENVIROMENT || 'dev',
  PORT: Number(process.env.PORT || 3000),
  DB: {
    TYPE: 'postgres',
    HOST: String(process.env.DB_HOST),
    NAME: String(process.env.DB_NAME),
    PASS: String(process.env.DB_PASS),
    USER: String(process.env.DB_USER),
    PORT: Number(process.env.DB_PORT),
    SYNC: true, // cambiar a false cuando este mas estable el modelo de datos
    LOG: true, // future 0-> process.env.DB_LOG === 'true',
  },
}

export default config
