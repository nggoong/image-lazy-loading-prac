import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchPhotoData } from './axios/apis';
import PhotoCard from './components/PhotoCard';

function App() {
  
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await fetchPhotoData.fetchPhotos(1);
        const data = res.data;
        console.log(data);
        setDatas(data);
      }
      catch(err) {
        console.log(err);
        alert("fetch err");
      }
    }

    getPhotos();
  }, [])

  return (
    <div className="App">
      {datas?.map((item, index) => <PhotoCard item={item} key={index} />)}
    </div>
  );
}

export default App;
