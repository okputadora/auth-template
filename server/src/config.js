import dotenv from 'dotenv'

dotenv.config()

const {
  NODE_ENV,
  SERVER_ADDRESS,
  PORT,
  MONGO_URI,
} = process.env


export default {
  default: {
    // Core related settings
    // Server / Cors / Node Version
    core: {
      address: SERVER_ADDRESS || '0.0.0.0',
      port: PORT || '4000',
      engine: 10.16,
      env: NODE_ENV,
      mongoURI: MONGO_URI,

      // CORS
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
      },

      // Logger
      logger: {
        level: 'info',
        silent: false,
        prettify: true,
        transports: {
          console: true,
          file: true,
        },
      },
    },
  },

  // Test environment
  test: {
    core: {
      port: null, // Enable autobind ports to avoid colisions
      logger: {
        level: 'error',
      },
    },
  },

  // Production environment
  production: {
    core: {
      logger: {
        prettify: false,
      },
    },
  },
}
