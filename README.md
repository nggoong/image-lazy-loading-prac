# image lazy loading ๊ตฌํ

## ๋ฐฉ๋ฒ 1: Intersection Observer API (branch: feature/IOA)

### ๐code

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

- image ๊ฐ๊ฐ์ Intersection Observer API ์ ์ฉ
- image๊ฐ viewport์ ๋ธ์ถ์ด ๋๊ธฐ ์ ์๋ thumbnail image๋ก ๋ก๋
- image๊ฐ viewport์ ๋ธ์ถ์ด ๋๋ฉด ์๋์ image๋ก ๋ก๋
- ์๋์ ์ด๋ฏธ์ง์ URL์ dataset์ ์ ์ฅํ ํ viewport ๋ธ์ถ ์ dataset์ ์ ์ฅ๋ URL ์ ์ฉํ๋ ๋ฐฉ๋ฒ
- onIntersect ํจ์์ ์์ ๋ก์ง์ ๊ตฌํ

## ๋ฐฉ๋ฒ 2: react-lazy-load-image-component(branch: feature/RLLIC)

> npm install react-lazy-load-image-component

ํจํค์ง ์ค์น ํ ์ฌ์ฉ

### ๐ code

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

- LazyLoadImage๋ฅผ import ํ์ฌ image src ์ ์ฉ
- props ์ค effect๋ฅผ ์ค์ ํ์ฌ viewport์ ๋ธ์ถ์ด ๋  ๋ ์ด๋ฏธ์ง๊ฐ ๋ณ๊ฒฝ๋๋ ํจ๊ณผ ์ ์ฉ
- effect์ ์ฌ์ฉ๋๋ ํจ๊ณผ๋ ๋ณ๋์ css๋ฅผ importํ์ฌ ์ฌ์ฉ
