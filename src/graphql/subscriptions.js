/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($owner: String) {
    onCreateBook(owner: $owner) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($owner: String) {
    onUpdateBook(owner: $owner) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($owner: String) {
    onDeleteBook(owner: $owner) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($author: String) {
    onCreatePage(author: $author) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($author: String) {
    onUpdatePage(author: $author) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($author: String) {
    onDeletePage(author: $author) {
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
