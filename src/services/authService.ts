import { account, ID } from "./appwriteConfig";

type SignupProps = {
  name: string;
  email: string;
  password: string;
};

type LoginProps = {
  email: string;
  password: string;
};

const authService = {
  async register({ name, email, password }: SignupProps) {
    try {
      const user = account.create(ID.unique(), email, password, name);
      return user;
    } catch (error) {
      console.error("Auth register error ->", error);
      return error;
    }
  },

  async login({ email, password }: LoginProps) {
    try {
      const session = account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      console.error("Auth login error ->", error);
      return error;
    }
  },

  async logout() {
    try {
      account.deleteSession("current");
      return true;
    } catch (error) {
      console.error("Auth logout error ->", error);
      return error;
    }
  },

  async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      console.error("Auth get current user error ->", error);
      return null;
    }
  },
};

export default authService;
