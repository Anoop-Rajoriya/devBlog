import { Client, Account, Databases, Storage } from "appwrite";
import { AppwriteEndpoint, AppwriteProjectId } from "./appwriteConstant";

const client = new Client()
  .setEndpoint(AppwriteEndpoint)
  .setProject(AppwriteProjectId);

export const account = new Account(client)