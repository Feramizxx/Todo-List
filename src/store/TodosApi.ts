import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todos } from '../Ts/Interface/Todos';

const url: any = process.env?.REACT_APP_BASE_URL;
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todos[], void>({
      query: () => '/todos',
    }),
    getTodoById: builder.query<Todos, number>({
      query: (id: number) => `/todos/${id}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
