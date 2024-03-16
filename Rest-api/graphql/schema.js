const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        posts: [post!]!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    input PostInputData { 
        title: String!
        content: String!
        imageUrl: String!
    }

    type rootQuery {
        login(email: String!, password: String!): AuthData!
    }

    type rootMutation{
        createUser(userInput: UserInputData): User!
        createPost(postInput: PostInputData): post!
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    } 
`);