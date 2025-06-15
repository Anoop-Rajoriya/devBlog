import { account, ID } from "@/lib/appwrite";

type SignupProps = {
  name: string;
  email: string;
  password: string;
};

type LoginProps = {
  email: string;
  password: string;
};

const auth = {
  async signup({ name, email, password }: SignupProps) {
    try {
      const user = account.create(ID.unique(), email, password, name);
      return user;
    } catch (signupError) {
      console.error("Error signuping account:", signupError);
      throw signupError;
    }
  },
  async login({ email, password }: LoginProps) {
    try {
      const session = account.createEmailPasswordSession(email, password);
      return session;
    } catch (loginError) {
      console.error("Error logging in:", loginError);
      throw loginError;
    }
  },
  async logout() {
    try {
      account.deleteSession("current");
      return true;
    } catch (logoutError) {
      console.error("Error logging out:", logoutError);
      throw logoutError;
    }
  },
  async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      console.error("No active session or error fetching user:", error);
      return null;
    }
  },
};

export default auth;
