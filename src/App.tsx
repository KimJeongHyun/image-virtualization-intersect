import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
