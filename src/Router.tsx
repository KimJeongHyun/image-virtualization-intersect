import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Landing } from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
