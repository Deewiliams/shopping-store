import React,{useState, useEffect} from 'react'
import ProductCard from '../Component/ProductCard';
import { Container,Grid } from '@material-ui/core';

const Category = () => {
const [categories, setCategories] = useState([])
    const getAllCategories = () => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(json => setCategories(json))
        .catch((error) => {
         console.error(error);
        })
    }

    useEffect(() => {
        getAllCategories();
    },[])

    if(categories !== null) {
        console.log('categoris',categories);
    }

  return (
    <Container>
    <br />
        <Grid container spacing={3}>
            {categories.map((category) => (
                 <ProductCard
                 id={category.id}
                 title={category.name}
                 image={category.image}
                 />
            ))}
        </Grid>
</Container>
  )
}

export default Category