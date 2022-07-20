/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      name
      description
      status
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        description
        status
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      name
      description
      status
      pages {
        items {
          title
          content
          status
          author
          id
          createdAt
          updatedAt
          bookPagesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        description
        status
        pages {
          nextToken
        }
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      title
      content
      status
      author
      id
      createdAt
      updatedAt
      bookPagesId
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        content
        status
        author
        id
        createdAt
        updatedAt
        bookPagesId
      }
      nextToken
    }
  }
`;
