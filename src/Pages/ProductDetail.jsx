import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Detail from '../Component/Detail';
import { useParams } from 'react-router-dom';
import Loading from '../Component/Loading'

const ProductDetail = () => {
    const {productId} = useParams();
    const [productDetail, setProductDetail] = useState([])
    const [errorMessage, setErrorMessage] =useState('');

    const getProductDetail = () => {
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
            .then(res => res.json())
            .then(json => setProductDetail(json))
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    useEffect(() => {
        getProductDetail();
    }, [productId])

    if (productDetail === null) {
        return <Loading />;
      }

   
    return (
        <Container>
            <h4>{errorMessage}</h4>
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