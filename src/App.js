import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Layout from './components/Layout';


function App() {
    const [darkState, setDarkState] = useState(false)
    const palletType = darkState ? 'dark' : 'light'

    const primaryDark = '#2e91ee'
    const primaryLight = '#0C69A9'
    const mainPrimaryColor = darkState ? primaryDark : primaryLight

    const secondaryDark = '#FF740A'
    const secondaryLight = '#FF740A'
    const mainSecondaryColor = darkState ? secondaryDark : secondaryLight

    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    })

    const handleThemeChange = () => {
        setDarkState(!darkState)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={palletType}>
                <Layout handleThemeChange={handleThemeChange} darkState={darkState} />
            </div>
        </ThemeProvider>
    );
}

export default App;
