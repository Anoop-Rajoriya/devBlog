import { account, ID } from "./appwrite";

async function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    return await account.create(ID.unique(), email, password, name);
  } catch (error) {
    throw error;
  }
}
async function createUserSession({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw error;
  }
}
async function deleteUserSession() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    throw error;
  }
}

async function getCurrentUser() {
  try {
    const user = await account.get();
    if (user) return user;
  } catch (error: any) {
    console.log(error.message);
  }

  return null;
}

export { createUser, createUserSession, deleteUserSession, getCurrentUser };
