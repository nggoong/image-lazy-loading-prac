import React from 'react';
import styled from 'styled-components';

const PhotoImage = ({ imageUrl }) => {

    return(
        <PhotoImageWrapper>
            <picture>
                <img src={imageUrl} alt="Temp Image" />
            </picture>
        </PhotoImageWrapper>
    )
}

export default PhotoImage;

const PhotoImageWrapper = styled.div`
  
`