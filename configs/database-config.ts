export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
  schema: string;
  syncOnAssociation: boolean
}

export const databaseConfig: DatabaseConfig = {
  username: "postgres",
  password: "P@ssw0rd",
  database: "car2hand",
  host: "119.59.103.195",
  port: 5432,
  dialect: "postgres",
  logging: true,
  force: true,
  timezone: "+00:00",
  schema: "dbo",
  syncOnAssociation: false
};