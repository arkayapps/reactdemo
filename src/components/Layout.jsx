import React from 'react';

import {
    AppBar,
    Container,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';

import Content from './Content';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
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

const Layout = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        StackOverFlow
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.contentContainer}>
                <Content />
            </Container>
        </div>
    );
}

export default Layout;
