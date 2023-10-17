const users = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
];

const posts = [
    { id: '101', title: 'Post 1', content: 'Content 1' },
    { id: '102', title: 'Post 2', content: 'Content 2' },
];

const userPostResolvers = {
    Query: {
        getUser: (_, { id }) => users.find((user) => user.id === id),
        getAllUsers: () => users,
        getPost: (_, { id }) => posts.find((post) => post.id === id),
        getAllPosts: () => posts,
    },
    Mutation: {
        createUser: (_, { name, email }) => {
            const newUser = { id: String(users.length + 1), name, email };
            users.push(newUser);
            return newUser;
        },
        createPost: (_, { title, content }) => {
            const newPost = { id: String(posts.length + 1), title, content };
            posts.push(newPost);
            return newPost;
        },
    },
};

module.exports = userPostResolvers;
