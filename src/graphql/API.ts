/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  name: string,
  description?: string | null,
  status?: Status | null,
  id?: string | null,
};

export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Todo = {
  __typename: "Todo",
  name: string,
  description?: string | null,
  status?: Status | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTodoInput = {
  name?: string | null,
  description?: string | null,
  status?: Status | null,
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateBookInput = {
  name: string,
  description?: string | null,
  status?: Status | null,
  id?: string | null,
};

export type ModelBookConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type Book = {
  __typename: "Book",
  name: string,
  description?: string | null,
  status?: Status | null,
  pages?: ModelPageConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
};

export type Page = {
  __typename: "Page",
  title?: string | null,
  content?: string | null,
  status?: Status | null,
  author?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  bookPagesId?: string | null,
};

export type UpdateBookInput = {
  name?: string | null,
  description?: string | null,
  status?: Status | null,
  id: string,
};

export type DeleteBookInput = {
  id: string,
};

export type CreatePageInput = {
  title?: string | null,
  content?: string | null,
  status?: Status | null,
  author?: string | null,
  id?: string | null,
  bookPagesId?: string | null,
};

export type ModelPageConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
  bookPagesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePageInput = {
  title?: string | null,
  content?: string | null,
  status?: Status | null,
  author?: string | null,
  id: string,
  bookPagesId?: string | null,
};

export type DeletePageInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelBookFilterInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
};

export type ModelPageFilterInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
  bookPagesId?: ModelIDInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      name: string,
      description?: string | null,
      status?: Status | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      name: string,
      description?: string | null,
      status?: Status | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageQueryVariables = {
  id: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};

export type ListPagesQueryVariables = {
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      title?: string | null,
      content?: string | null,
      status?: Status | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      bookPagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    name: string,
    description?: string | null,
    status?: Status | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    name: string,
    description?: string | null,
    status?: Status | null,
    pages?:  {
      __typename: "ModelPageConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePageSubscriptionVariables = {
  author?: string | null,
};

export type OnCreatePageSubscription = {
  onCreatePage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};

export type OnUpdatePageSubscriptionVariables = {
  author?: string | null,
};

export type OnUpdatePageSubscription = {
  onUpdatePage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};

export type OnDeletePageSubscriptionVariables = {
  author?: string | null,
};

export type OnDeletePageSubscription = {
  onDeletePage?:  {
    __typename: "Page",
    title?: string | null,
    content?: string | null,
    status?: Status | null,
    author?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    bookPagesId?: string | null,
  } | null,
};
