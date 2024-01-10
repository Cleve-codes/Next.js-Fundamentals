import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore} from 'next/cache'

// const users = [
//   { id: 1, name: 'John Doe', email: 'johndoegmail.com' },
//   { id: 2, name: 'Jane Doe', email: 'janedoegmail.com' },
//   { id: 3, name: 'Jim Doe', email: 'jimdoegmail.com' },
//   { id: 4, name: 'Josh Doe', email: 'joshdoegmail.com'}
// ]


// const posts = [
//   { id: 1, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 1 },
//   { id: 2, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 1 },
//   { id: 3, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 2 },
//   { id: 4, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 3 },
// ]



export const getPosts = async () => {
  try{
    connectToDb()
    const posts = await Post.find()
    return posts;
  } catch(err) {
    console.log(err)
    throw new Error("Failed to find posts!")
  }
}

export const getPost = async (slug) => {

  try{
    connectToDb();
    const post = await Post.findOne({slug})
    return post
  } catch(err) {
    console.log(err);
    throw new Error('Failed to fetch Post')
  }

}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users;
  } catch(err) {
    console.log(err)
    throw new Error("Failed to fetch Users")
  }
}

export const getUser = async (id) => {
  noStore()
  try{
    connectToDb();
    const user = User.findById(id)
    return user
  } catch(err){
    console.log(err)
    throw new Error("Failed to fetch users")
  }

}
