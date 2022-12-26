import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { LazyLoadImage }from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const PhotoImage = ({ imageUrl }) => {
    return(
        <PhotoImageWrapper>
            <LazyLoadImage
            src={imageUrl}
            effect="blur"
            threshold={100}
              />
            
        </PhotoImageWrapper>
    )
}

export default PhotoImage;

const PhotoImageWrapper = styled.div`
  
`