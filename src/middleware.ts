import withAuth from "next-auth/middleware";

export default withAuth(
  (_req) => {
    // console.log("==================");
    // console.log(req.nextauth);
    // console.log("==================");
  },
  {
    secret: process.env.NEXTAUTH_URL,
    callbacks: {
      authorized: () => true,
    },
  },
);
