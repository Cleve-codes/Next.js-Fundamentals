import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";


const login = async (credentials) => {

  try{
    connectToDb()
    const user = await User.findOne({username: credentials.username})

    if(!user) {
      throw new Error("No user found")
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if(!isPasswordCorrect) {
      throw new Error("Password is incorrect")
    }

    return user;
  } catch(err) {
    return null;
  }

}


export const  {handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({...authConfig,
  providers: [
    Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
    CredentialsProvider({
     async authorize(credentials) {
          try{

            const user = await login(credentials)

            if(!user) {
              throw new Error("No user found")
            }

            return user;
          } catch(err){
            throw new Error(err)
          }
    }
    }),
  ],
  callbacks: {
  async signIn({user, account, profile}) {
    // console.log(user, account, profile)
    if(account.provider === 'github') {
      connectToDb()
      try {
        const user = await User.findOne({email: profile.email})

        if(!user){
          const newUser = new User({
            username: profile.login,
            email: profile.email,
            image: profile.avatar_url,
          })
          await newUser.save()
          console.log("Added to db")
        }

      } catch(err) {
        console.log(err);
        return false;
      }
    }
    return true;
  },
  ...authConfig.callbacks,
}})