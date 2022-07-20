/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
