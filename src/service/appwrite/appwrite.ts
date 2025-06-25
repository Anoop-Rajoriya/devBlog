import { Client, Account, Databases, Storage, ID } from "appwrite";
import { AppwriteEndpoint, AppwriteProjectId } from "./appwriteConstant";

const client = new Client()
  .setEndpoint(AppwriteEndpoint)
  .setProject(AppwriteProjectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { account, database, storage, ID };
