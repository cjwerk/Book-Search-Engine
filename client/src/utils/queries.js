import gql from "graphql-tags";

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
    }
}`;
