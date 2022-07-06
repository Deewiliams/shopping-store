import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';

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

const ProductList = () => {
    const classes = useStyles();

    const [products, setProducts] = useState([])

    const getProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }


    useEffect(() => {
        getProducts();
    }, [])

    if (products !== null) {
        console.log('products', products);
    }

    return (
        <Container>
            <br />
            <div>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <>
                            <Grid item sm={6} md={3}>
                            <Paper>
                            {product.title}
                                <img width={250} src={product.images[0]} />
                            </Paper>
                               
                            </Grid>
                        </>
                    ))}

                </Grid>

            </div>
        </Container>
    )
}

export default ProductList