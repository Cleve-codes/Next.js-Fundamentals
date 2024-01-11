"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
  "use server"
  const {title, desc} = Object.fromEntries(formData);
  let slug = title.toLowerCase().split(" ").join("-");


  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      img : `https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      userId: 12,
    })


    await newPost.save()

    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = async (id) => {
  try{
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB")
    revalidatePath("/blog")
  }
  catch(error){
    console.log(error)
  }
}

export const handleGithubLogin = async () => {
  // "use server"
   await signIn("github")
   console.log("SIgned")
}

export const handleLogout = async () => {
  await signOut()
}

export const register = async (formData) => {
  const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);

  if(password !== passwordRepeat) { return "Passwords aren't matching"}

  try {
    connectToDb();

    const user = await User.findOne({username});

    if(user) { return "User already exists"}

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img
    })

    await newUser.save()
    console.log("Saved to DB")
  } catch(err) {
    console.log(err)
    return { error: "something went wrong" }
  }
}