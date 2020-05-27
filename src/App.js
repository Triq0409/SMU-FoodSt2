import React from 'react';
import MyMap from './Components/NaverMaps';
import Form from './Naver_test/Form';
import Write from './Components/Write';
//import {  NaverMap, Marker } from 'react-naver-maps';
import './App.css';


function App() {
  return (
    <Form mapPop={(
      <MyMap />
    )}
    reviews={(
      <Write />
    )}
    >
    </Form>
  );

}

export default App;



