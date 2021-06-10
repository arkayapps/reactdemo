import React from 'react';

import {
    AppBar,
    Container,
    IconButton,
    makeStyles,
    Toolbar,
    Tooltip,
    Typography
} from '@material-ui/core';

import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import Content from './Content';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    contentContainer: {
        paddingTop: '20px',
        paddingBottom: '20px'
    }
}));

const Layout = (props) => {
    const classes = useStyles();

    const lightButton = (props.darkState) ? (<Tooltip title="Light"><Brightness7Icon style={{ color: "white" }} /></Tooltip>) : (<Tooltip title="Dark"><Brightness4Icon style={{ color: "white" }} /></Tooltip>)

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        StackOverFlow
                    </Typography>
                    <IconButton onClick={props.handleThemeChange}>
                        {lightButton}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Content />
            </Container>
        </div>
    );
}

export default Layout;
