const process = require('process');

const username = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "postgres";
const host = process.env.DB_HOST || "localhost";
const database = process.env.DB_DATABASE || "postgres";
const port = +process.env.DB_PORT || 3306;

module.exports = {
  "type": "mysql",
  host,
  port,
  username,
  password,
  database,
  "synchronize": true,
  "dropSchema": false,
  "logging": true,
  "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "migrations",
    "subscribersDir": "subscriber"
  }
}
