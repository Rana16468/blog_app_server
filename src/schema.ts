
//https://github.com/Apollo-Level2-Web-Dev/blog-app-client-starter-pack/tree/main/src
export const typeDefs = `
type Query{
    me:User
    users:[User]
    posts:Post 
}
type Mutation{
    singup(name:String,email:String,password:String):UserArgs,
    singin(email:String,password:String):UserArgs

}
type UserArgs{
    userError:String
    token:String
}
 
  type Post {
    id:ID!
    title:String!
    content:String!
    author:User
    createdAt:String!
    published:Boolean!
    
  }
  type User {
    id:ID!
    name:String!
    email:String!
    bio:String
    createdAt:String!
    posts:[Post]
  }
  type Profile{
    id:ID!
    bio :String!
    createdAt:String!
    user:User!
  }
`;

/* 
 type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

*/