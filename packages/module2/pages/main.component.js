import { Button } from "@monorepo/components"
import { Route } from "react-router-dom"
import { Inner1 } from "./inner"
export const Main2 = () => 
  <div><p>pagina principal 2</p><Button>button 2</Button>
    <Route path="/2/1"><Inner1/></Route>
    <Route path="/2/2"><Inner1/></Route>
  </div>

