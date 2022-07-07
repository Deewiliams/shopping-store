/* eslint-disable */
import React,{useState, useEffect} from 'react'
import CategoryCard from '../Component/CategoryCard';
import { Container,Grid } from '@material-ui/core';
import Loading from '../Component/Loading';

const Category = () => {
const [categories, setCategories] = useState([]);
const [errorMessage, setErrorMessage] = useState('');
    const getAllCategories = () => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(json => setCategories(json))
        .catch((error) => {
            setErrorMessage(error.message);
        })
    }

    useEffect(() => {
        getAllCategories();
    },[])

    if(categories === null) {
       return <Loading />;
    }
  return (
    <Container>
        <h4>{errorMessage}</h4>
    <br />
        <Grid container spacing={3}>
            {categories.map((category) => (
                 <CategoryCard
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