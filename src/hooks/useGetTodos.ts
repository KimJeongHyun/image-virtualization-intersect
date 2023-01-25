import { useQuery } from "react-query";

import axios from "axios";

type GetTodosArrayType = GetTodosType[];

export type GetTodosType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const getTodos = () => {
  return axios.get<GetTodosArrayType>(
    "https://jsonplaceholder.typicode.com/photos"
  );
};

export default function useGetTodos() {
  return useQuery(["getTodos"], getTodos, {
    select: (data) => data.data,
    retry: false,
    refetchOnWindowFocus: false,
  });
}
