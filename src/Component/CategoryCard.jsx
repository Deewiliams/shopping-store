import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
	return (
		<>
			<Grid item sm={6} md={3}>
				{props.title}
				<Link to={`/product_category/${props.id}`}>
					<img width={250} src={props.image} alt={props.title} />
				</Link>
			</Grid>
		</>
	);
};
CategoryCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default CategoryCard;