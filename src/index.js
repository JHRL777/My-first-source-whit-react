import React from "react";
import ReactDom from "react-dom/client";
import { Saluda, UserCard } from "./Saluda";
import Prodcuto, { Nav } from "./Prodcuto";
import {Button} from  "./Button"
import {Tasking} from "./Task"
import {Posts} from "./MiFetch"
import {ArryRobot} from "./ArryRobot"
import {FirstHook} from "./FirstHook"
const root = ReactDom.createRoot(document.getElementById("root"));



root.render(
  <>
   <FirstHook/>
    
  </>
);
