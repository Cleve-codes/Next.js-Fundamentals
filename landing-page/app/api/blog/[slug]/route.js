import { NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/utils";
import { Post } from "../../../../lib/models";

export const GET = async (request, {params}) => {

  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch(err){
    console.log(err)
    throw new Error("Failed to fetch post")
  }

}