import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { ENV_VARIABLES } from "constants/envVariables";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: ENV_VARIABLES.GOOGLE_CLIENT_ID,
      clientSecret: ENV_VARIABLES.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        console.log({ profile });
      }
      return true;
    },
    jwt: async ({ token, user, account }) => {
      // not this token has user property
      return Promise.resolve(token);
    },
    // user arg here is actully token that returned from jwt.
    session: async ({ session, token }: any) => {
      session.token = token.user;
      // since I get error, I return Promise.resolve(session)
      return Promise.resolve(session);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
