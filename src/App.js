import React, { useEffect, useState } from 'react';
import { fetchPhotoData } from './axios/apis';
import PhotoCard from './components/PhotoCard';

function App() {
  
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);

  const getPhotos = async (pageNum) => {
    try {
      const res = await fetchPhotoData.fetchPhotos(pageNum);
      const data = res.data;
      setDatas((prev) => [...prev, ...data])
    }
    catch(err) {
      alert("fetch err!!");
    }
  }

  useEffect(() => {
    getPhotos(page);
  }, [page])

  return (
    <div className="App">
      {datas?.map((item, index) => 
      <PhotoCard item={item} key={index} setPage={setPage} idx={index} length={datas.length}/>)}
    </div>
  );
}

export default App;
