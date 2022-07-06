import React, { useState, useEffect } from 'react';
import { Container, Grid} from '@material-ui/core';
import ProductCard from '../Component/ProductCard';
import Loading from '../Component/Loading'



const ProductList = () => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }


    useEffect(() => {
        getProducts();
    }, [])

    if (products === null) {
        return <Loading />
    }

    return (
        <Container>
            <br />
                <Grid container spacing={3}>
                    {products.map((product) => (
                         <ProductCard
                         id={product.id}
                         title={product.title}
                         image={product.images[0]}
                         />
                    ))}
                </Grid>
        </Container>
    )
}

export default ProductList