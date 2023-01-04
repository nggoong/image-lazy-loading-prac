# image lazy loading 구현

## 방법 1: Intersection Observer API (branch: feature/IOA)

### 📌code

``` jsx
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
```

- image 각각에 Intersection Observer API 적용
- image가 viewport에 노출이 되기 전에는 thumbnail image로 로드
- image가 viewport에 노출이 되면 원래의 image로 로드
- 원래의 이미지의 URL을 dataset에 저장한 후 viewport 노출 시 dataset에 저장된 URL 적용하는 방법
- onIntersect 함수에 위의 로직을 구현

## 방법 2: react-lazy-load-image-component(branch: feature/RLLIC)

> npm install react-lazy-load-image-component

패키지 설치 후 사용

### 📌 code

```jsx
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
```

- LazyLoadImage를 import 하여 image src 적용
- props 중 effect를 설정하여 viewport에 노출이 될 때 이미지가 변경되는 효과 적용
- effect에 사용되는 효과는 별도의 css를 import하여 사용
