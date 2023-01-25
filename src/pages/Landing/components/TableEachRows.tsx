import React, { useState } from "react";
import { GetTodosType } from "../../../hooks/useGetTodos";
import useIntersectObserver from "../../../hooks/useIntersectObserver";

import { Loader, RenderImage, TableRow } from "../_styled";

export default function TableEachRows({
  data,
  isFirst,
}: {
  data: GetTodosType;
  isFirst: boolean;
}) {
  const [isIntersect, setIsIntersect] = useState(isFirst);
  const [isView, setIsView] = useState(false);

  const { target } = useIntersectObserver({
    onIntersect: () => {
      if (!isFirst) {
        setIsIntersect(true);
      }
    },
    threshold: 0.2,
  });
  return (
    <TableRow ref={target}>
      {isIntersect ? (
        <>
          {!isView && (
            <Loader>
              <div className="loader" />
            </Loader>
          )}
          <RenderImage
            src={data.url}
            onLoad={() => setTimeout(() => setIsView(true), 500)}
          />
        </>
      ) : (
        ""
      )}
    </TableRow>
  );
}
