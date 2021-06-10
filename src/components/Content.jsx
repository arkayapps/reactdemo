import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import InfiniteScroll from 'react-infinite-scroll-component';

import ContentRow from './ContentRow';

import axios from 'axios';
import config from '../config.json';


const Content = () => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(0)
    const [more, setMore] = useState(true)

    useEffect(() => {
        getContent()
        // eslint-disable-next-line
    }, [])

    const getContent = () => {
        const _page = page + 1
        const params = {
            page: _page,
            pagesize: 20,
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow'
        }
        const headerConfig = {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            params
        }
        const url = config.SERVER_URL + '/search/advanced'
        axios.get(url, headerConfig).then(response => {
            const _items = [...items, ...response.data.items]
            const has_more = response.data.has_more
            setItems(_items)
            setPage(_page)
            setMore(has_more)
        }).catch(error => {
            if (error.response) {
                console.log('Response error', error.response)
            } else if (error.request) {
                console.log('Request error', error.request)
            } else {
                console.log(error)
            }
        })
    }

    return (
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={2}
            >
                <InfiniteScroll
                    dataLength={items.length} //This is important field to render the next data
                    next={() => {
                        getContent(page)
                    }}
                    hasMore={more}
                >
                    {items.map((item, index) => {
                        const author = item.owner.display_name
                        const date = item.creation_date
                        const image = item.owner.profile_image
                        const link = item.link
                        const title = item.title
                        return (
                            <Grid item key={index}>
                                <ContentRow author={author} date={date} image={image} link={link} title={title} />
                            </Grid>
                        )
                    })}
                </InfiniteScroll>
            </Grid>
        </div>
    );
}

export default Content;
