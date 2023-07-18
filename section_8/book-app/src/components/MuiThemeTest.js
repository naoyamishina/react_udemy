import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import Button from '@mui/material/Button'

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function MuiThemeTest() {
  return (<><ThemeProvider theme={theme}>
    <Button color="primary" variant="contained">色の変更</Button> 
  </ThemeProvider></>)
}

export default MuiThemeTest
