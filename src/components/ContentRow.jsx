import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import {
    Avatar,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Link,
    Typography
} from '@material-ui/core';

import { timestampToDateTimeString } from '../functions';

const ContentRow = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Dialog
                fullWidth
                onClose={handleClose}
                open={open}
            >
                <DialogContent>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={1}
                    >
                        <Grid item >
                            <Typography variant="h5" component="h2">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Link href={props.link} target="_blank">
                                Open page in new tab.
                            </Link>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Card onClick={handleOpen} className="text-left m-3 cursor-pointer">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Row>
                        <Col md={6} xs={6} className="d-flex">
                            <Avatar alt="BKS" src={props.image} className="mt-2" />
                            <span className="ml-2 mt-3">{props.author}</span>
                        </Col>
                        <Col md={6} xs={6} className="text-right">
                            <span className="mt-3">{timestampToDateTimeString(props.date)}</span>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
        </div>
    );
}

ContentRow.defaultProps = {
    author: '',
    date: '',
    image: '',
    link: '',
    title: ''
}

export default ContentRow;
