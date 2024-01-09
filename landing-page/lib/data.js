const users = [
  { id: 1, name: 'John Doe', email: 'johndoegmail.com' },
  { id: 2, name: 'Jane Doe', email: 'janedoegmail.com' },
  { id: 3, name: 'Jim Doe', email: 'jimdoegmail.com' },
  { id: 4, name: 'Josh Doe', email: 'joshdoegmail.com'}
]

const posts = [
  { id: 1, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 1 },
  { id: 2, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 1 },
  { id: 3, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 2 },
  { id: 4, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna. Sed euismod, nisl eget ultricies aliquam, nunc sapien ultricies nunc, eget ultricies nisl nisl eget urna.', userId: 3 },
]

export const getPosts = async () => {
  return posts;
}

export const getPost = async (id) => {
  return posts.find(post => post.id === parseInt(id));
}

export const getUser = async (id) => {
  return users.find(user => user.id === id);
}
