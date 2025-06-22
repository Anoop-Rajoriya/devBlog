import { account } from "./appwrite";

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

export { getCurrentUser };
