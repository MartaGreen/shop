import { createConnection } from "typeorm";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "ec2-34-246-227-219.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "bbhnodatlmhvrf",
      password:
        "015053b79ce6a380947483fb8a77063caed7cf4cfc26e24af0db2361ccb8f192",
      database: "de78qnt8qokn54",
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
