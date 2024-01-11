export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.id = user.id
        token.isAdmin = user.isAmin
      }
      return token;
    },
    async session({session, token}){
      if (token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }
      return session;
    },
    authorized({auth, request}) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');


      //Only admin can access admin panel
      if(isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // Only authenticated users can access blog page
      if(isOnBlogPage && !user) {
        return false;
      }


      // Only unauthenticated users can access login page
      if(isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl))
      }
      return true;
    },
  },
};