import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Loader} from './components/Loader';
import {UnsplashImage} from './components/UnsplashImage';
import {Heading} from './components/Heading';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color:#e0ddd5;
  }
  body:{
    font-family:sans-serif;
  }
`;
const WrapperImage = styled.section`
  max-width:70rem;
  margin:4rem auto;
  display:grid;
  grid-gap:1em;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  grid-auto-rows:300px;
`;

export const App=() => {
  const [images,setImages] = useState([]);
  const fetchImage =() => {
    const accessKeyUnsplash = 'AcXfPig5JKkrcrCKRyq6OjKAG1E8yQZEH0wqzTHO1EI';
    const baseUrlUnsplash = 'https://api.unsplash.com';
    axios.get(`${baseUrlUnsplash}/photos/random?client_id=${accessKeyUnsplash}&count=8`)
    .then(res=>setImages([...images,...res.data]));
  }
  useEffect(() => {
    //4nonHEwN2olyEEbigx6v_XZZmOnAYRxWz5O5diKI7jo
    //6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26
    //zzUMSnJNyIKxyIayV2xMDTXlx-J9n0Rt6cv52WWw1lE
    fetchImage();
  },[])
  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll 
      dataLength={images.length}
      hasMore={true}
      loader={<Loader />}
      next={fetchImage}
      >
      <WrapperImage>
      {
        images.map(
          (image,index)=> (
            <UnsplashImage description={image.user.username} url={image.urls.thumb} key={index} />
          )
        )
      }
      </WrapperImage>
      </InfiniteScroll>
      
    </div>
  );
}

export default App;
