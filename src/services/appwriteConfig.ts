import { Client, Account, Databases, Storage } from "appwrite";
import { AppwriteEndpoint, AppwriteProjectId } from "./appwriteConstants";

const client = new Client();

client
  .setEndpoint(AppwriteEndpoint) // Your API Endpoint
  .setProject(AppwriteProjectId); // Your Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
// export const functions = new Functions(client);
export { ID, Query } from "appwrite"; // Export useful Appwrite utilities
