import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ProductDetail = () => {
    const classes = useStyles();
    const [productDetail, setProductDetail] = useState([])

    const getProductDetail = () => {
        fetch('https://api.escuelajs.co/api/v1/products/1')
            .then(res => res.json())
            .then(json => setProductDetail(json))
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    if (productDetail !== null) {
        console.log('datail', productDetail);
    }
    return (
        <Container>
            <br />
            <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                    <img width={640} height={480} src={productDetail.images} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>{productDetail.title} </h2>
                    <h2>description:{productDetail.description} </h2>
                    <h2>price:{productDetail.price} </h2>
                </Grid>
            </Grid>
        </Container>

    )
}

export default ProductDetail