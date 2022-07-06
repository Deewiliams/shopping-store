import React, { useState, useEffect } from 'react';
import { Container, Grid} from '@material-ui/core';
import ProductCard from '../Component/ProductCard';



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
                         <ProductCard
                         id={product.id}
                         title={product.title}
                         image={product.images[0]}
                         />
                        </>
                    ))}

                </Grid>

            </div>
        </Container>
    )
}

export default ProductList