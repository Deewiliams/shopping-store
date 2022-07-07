 /* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, TextField} from '@material-ui/core';
import ProductCard from '../Component/ProductCard';
import Loading from '../Component/Loading';

const ProductList = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");

    const getProducts = () => {
        fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=0&limit=50`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    useEffect(() => {
        getProducts();
    }, [categoryId])

    if (products === null) {
        return <Loading />
    }

    return (
        <Container>
            <br />
            <Grid item xs={12}>
            <TextField
              id="outlined-helperText"
              label="Search"
              variant="outlined"
              type="text"
              onChange={event => setQuery(event.target.value)}
              placeholder="Search for products"
              fullWidth
            >
            </TextField>
          </Grid>

            <br />
            <Grid container spacing={3}>
            {
                products.filter(product => {
                  if (query === '') {
                    return product;
                  } else if (product.title.toLowerCase().includes(query.toLowerCase())) {
                    return product;
                  }
                }).map((product) => (
                    <ProductCard
                        key={product.id}
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