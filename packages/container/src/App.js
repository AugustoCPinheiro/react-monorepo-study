// import logo from './logo.svg';
import React, {  Suspense } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
// import Main from "@monorepo/module/pages"
// import Main2 from "@monorepo/module2/pages"
const Main = React.lazy(() => import("@monorepo/module/pages")) 
const Main2 = React.lazy(() => import("@monorepo/module2/pages"))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="1">modulo1</Link>
        </li>
        <li>
          <Link to="2">modulo2</Link>
        </li>    
      </ul>
      <hr />
      <Switch>
        <Route path="/1">
          <Main/>
        </Route>
        <Route path="/2">
          <Main2/>
        </Route>
        <Route path="/">
          <div>Homepage</div>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    </Suspense>

  
    
  );
}

export default App;
