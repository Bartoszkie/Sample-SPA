import React from 'react';

import {MovieItemContainer, InfoItem} from './movie-item.styles';

const MovieItem = (props) => {
    return (
        <MovieItemContainer {...props}>
            <InfoItem>{props.title} {props.year}</InfoItem>
            <InfoItem>{props.rating}</InfoItem>
        </MovieItemContainer>
    );
}

export default MovieItem;