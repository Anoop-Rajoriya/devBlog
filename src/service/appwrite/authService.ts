import { account, ID } from "./appwrite";

async function registerUser({
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
    console.error("Auth error registerUser() |", error);
    return error;
  }
}
async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.log("Auth error loginUser() |", error);
    return error;
  }
}
async function logoutUser() {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.log("Auth error logoutUser |", error);
    return error;
  }
}

async function getCurrentUser() {
  try {
    const user = await account.get();
    if (user) return user;
    return null;
  } catch (error) {
    console.error("Auth Error getCurrentUser() |", error);
    return error;
  }
}

export { registerUser, loginUser, logoutUser, getCurrentUser };
