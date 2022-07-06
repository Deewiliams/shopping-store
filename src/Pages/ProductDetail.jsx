import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Detail from '../Component/Detail';


const ProductDetail = () => {
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
            <Detail 
            image={productDetail.images}
            title={productDetail.title}
            description={productDetail.description}
            price={productDetail.price}
            />
            </Grid>
        </Container>

    )
}

export default ProductDetail