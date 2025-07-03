import { Client, Account, Databases, Storage, ID } from "appwrite";

const AppwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const AppwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
  .setEndpoint(AppwriteEndpoint)
  .setProject(AppwriteProjectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { account, database, storage, ID };
