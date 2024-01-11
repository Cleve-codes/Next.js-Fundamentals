"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

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
    console.log("Saved to DB")
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