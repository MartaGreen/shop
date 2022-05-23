import "dotenv/config";
import { createConnection } from "typeorm";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      extra: {
        ssl: { rejectUnauthorized: false },
      },
    });
    console.log("Connected to database");
  } catch (err) {
    console.error(err);
    throw new Error("Unable to connect to database");
  }
};

export default main;
