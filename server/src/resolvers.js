const posts = [{
  id: 1,
  title: 'First post',
}, {
  id: 2,
  title: 'Second post',
}];

let nextId = 3;

export const resolvers = {
  Query: {
    posts: () => {
      return posts;
    },
  },

  Mutation: {
    addPost: (root, args) => {
      const newPost = { id: nextId++, title: args.title };
      posts.push(newPost);
      return newPost;
    },
  },
};
