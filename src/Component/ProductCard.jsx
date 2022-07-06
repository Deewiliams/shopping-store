import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";

const ProductCard = (props) => {
  return (
    <>
    <Grid item sm={6} md={3}>
    {props.title}
        <img width={250} src={props.image} alt={props.titel} />
       
    </Grid>
</>
  )
}
ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default ProductCard