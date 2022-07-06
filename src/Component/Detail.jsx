import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from "prop-types";

const Detail = (props) => {
    return (
        <>
            <Grid item sm={12} md={6}>
                <img width={600} height={480} src={props.image} alt={props.title} />
            </Grid>
            <Grid style={{ textAlign: 'left' }} item xs={12} sm={6}>
                <h2>{props.title} </h2>
                <Typography style={{ fontSize: 30 }} variant="body2" gutterBottom>
                    Description:{props.description}
                </Typography>
                <Typography style={{ fontSize: 30 }} variant="body1" gutterBottom>Price: K{props.price} </Typography>
            </Grid>
        </>
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default Detail