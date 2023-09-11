import type { AuthOptions } from "next-auth";
import GoggleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID;
const secret = process.env.GOOGLE_SECRET;

console.log("clientId: ", clientId);
console.log("secret:", secret);

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: clientId!,
      clientSecret: secret!,
    }),
  ],
};
