import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhotoImage from "./PhotoImage";

const PhotoCard = ({ item, idx, setPage, length }) => {
  const [target, setTarget] = useState(null);

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      setPage(page => page + 1);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.3 });
      observer.observe(target);
    }

    return(() => {
        observer && observer.disconnect();
    })
  }, [target]);

  return (
    <PhotoCardWrapper ref={idx === length - 1 ? setTarget : null}>
      <PhotoImage imageUrl={item.url} />
    </PhotoCardWrapper>
  );
};

export default PhotoCard;

const PhotoCardWrapper = styled.div`
  background: yellow;
`;
