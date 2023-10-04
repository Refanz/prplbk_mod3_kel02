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

<Typography variant="h3" component="h2">
                Tugas Kelompok 2 Modul 3
            </Typography>
            <div className="card">

                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={plusCount} startIcon={<Add/>}>Plus</Button>

                    <Button variant="contained" color="error" onClick={minusCount} startIcon={<Remove/>}>Minus</Button>

                    <Typography variant="h6">
                        Count: {count}
                    </Typography>
                </Stack>
                </div>
        </>
    )
}

export default App
