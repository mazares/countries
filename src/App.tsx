
import "./App.css";
import SearchBox from "./components/search_box/SearchBox";
import Content from "./components/content/Content";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {

const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>

  <div className="App">
    <h1>This thing is under construction...</h1>
    <SearchBox />
    <Content />
  </div>
  </QueryClientProvider>

  )
}

export default App;