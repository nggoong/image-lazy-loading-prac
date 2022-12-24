import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PhotoImage = ({ imageUrl, thumbnailUrl }) => {

  const imageRef = useRef(null);

  const onIntersect = ([entry], observer) => {
    if(entry.isIntersecting) {
      console.log("heelow");
      observer.unobserve(entry.target);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {threshold:0.1});
    observer.observe(imageRef.current);

    return() => {
      observer && observer.disconnect();
    }
  }, [])

    return(
        <PhotoImageWrapper>
            <picture>
                <img src={imageUrl} alt="Temp Image" ref={imageRef} data-src={thumbnailUrl}/>
            </picture>
        </PhotoImageWrapper>
    )
}

export default PhotoImage;

const PhotoImageWrapper = styled.div`
  
`