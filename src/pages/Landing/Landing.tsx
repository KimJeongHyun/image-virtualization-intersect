import React from "react";
import useGetTodos from "../../hooks/useGetTodos";

import { LandingContainer, TableContainer } from "./_styled";

import { TableEachRows } from "./components";

const initialSize = 10;

export default function Landing() {
  const { data } = useGetTodos();

  return (
    <LandingContainer>
      <TableContainer>
        {data
          ? data.map((i, idx) => (
              <TableEachRows
                data={data[idx]}
                key={i.title}
                isFirst={idx < initialSize}
              />
            ))
          : ""}
      </TableContainer>
    </LandingContainer>
  );
}
