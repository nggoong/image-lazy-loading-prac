import React from 'react';
import styled from 'styled-components';
import PhotoImage from './PhotoImage';

const PhotoCard = ({ item }) => {


    return(
        <PhotoCardWrapper>
            <PhotoImage imageUrl={item.url}/>
        </PhotoCardWrapper>
    )
}

export default PhotoCard;

const PhotoCardWrapper = styled.div`
  background:yellow;
`