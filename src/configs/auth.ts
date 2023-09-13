import type { AuthOptions, User } from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/data/users';

const clientId = process.env.GOOGLE_CLIENT_ID;
const secret = process.env.GOOGLE_SECRET;

console.log('clientId: ', clientId);
console.log('secret:', secret);

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: clientId!,
      clientSecret: secret!,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          user => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
