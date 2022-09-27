import logo from './logo.svg';
import './App.css';

import { Box, Button, Typography, useTheme } from '@mui/material';

function App() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Typography component="p" variant='subtitle1' mb={2}>Edit <code>src/App.js</code> and save to reload.</Typography>
      <Button variant="contained" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</Button>
    </Box>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
