import {useEffect, useState} from 'react'
import './App.css'
import {Button, List, ListItem, ListItemText, Stack, Typography} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";

function App() {
    const [count, setCount] = useState(0);
    const [isTen, setIsTen] = useState(false);

    useEffect(() => {
        count === 10 ? setIsTen(true) : setIsTen(false);
    }, [count]);
    
    function plusCount() {
      setCount(count + 1);
  }

  function minusCount() {
      setCount(count - 1);
  }
    return (
        <>

        </>
    )
}

export default App
