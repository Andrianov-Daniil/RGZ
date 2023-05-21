import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import NavBar from './components/NavBar.js';
import {observer} from "mobx-react-lite"
import { Context } from './index.js';
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect( () => 
    {
      try{
        check().then(data => {
          if(data.id){
            user.setUser(data);
            user.setIsAuth(true);
            //localStorage.clear();
          }
        }).finally( () => setLoading(false))
      }
      catch(e){
        alert("Вы не авторизованы");
      }      
    },
    [])

  if(loading){
    return <Spinner animation="grow"/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
