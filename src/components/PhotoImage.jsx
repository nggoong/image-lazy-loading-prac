import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PhotoImage = ({ imageUrl, thumbnailUrl }) => {

  const imageRef = useRef(null);

  const onIntersect = ([entry], observer) => {
    if(entry.isIntersecting) {
      const current = imageRef.current;
      current.src = current.dataset.src;
      observer.unobserve(entry.target);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {threshold:1.0});
    observer.observe(imageRef.current);

    return() => {
      observer && observer.disconnect();
    }
  }, [])

    return(
        <PhotoImageWrapper>
            <picture>
                <img src={thumbnailUrl} alt="Temp Image" ref={imageRef} data-src={imageUrl}/>
            </picture>
        </PhotoImageWrapper>
    )
}

export default PhotoImage;

const PhotoImageWrapper = styled.div`
  
`