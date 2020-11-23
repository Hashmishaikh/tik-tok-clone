import React, { useState,useEffect } from 'react';
import Video from './Video';
import db from './Firebase';
import './App.css';

function App() {
  const [videos,setVideos] = useState([]);
  useEffect (() => {
    db.collection('videos').onSnapshot(snapshot =>setVideos(snapshot.docs.map(doc => doc.data())))
  },[videos]);
  return (
    <div className="app">
      <div className="app__videos">
      {videos.map(({url,channel,description,song,likes,messages,shares}) => (
        <Video 
          url ={url}
          channel = {channel}
          description = {description}
          song = {song}
          likes = {likes}
          messages = {messages}
          shares = {shares}
        />
      ))}
      {/*
        <Video
          // url="https://v16m.tiktokcdn.com/e208292df7463d8f3b83cfc096c47722/5fb91494/video/tos/alisg/tos-alisg-pve-0037c001/9aa990d215d6481d9cce9d0e13351f25/?a=1233&amp;br=3422&amp;bt=1711&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=2020112107221401018806120303019207&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M3M3NnltPGQ7eDMzODczM0ApNzo4aDRkMzs3NzRpZTQ1OWdnZ3AxMm1zbGxfLS1jMTRzczFgMWE1Ni5jYDYyMGIvL186Yw%3D%3D&amp;vl=&amp"
          url="https://d28cdhge7i53l0.cloudfront.net/dubs/bd8a4176-fe65-4fd0-9a33-432fc3542ded.mp4"
          channel="raycosta6"
          description="hole hole"
          song="Luse-Fonsi"
          likes={400}
          messages={300}
          shares={150}
        />
        <Video
          // url="https://v77.tiktokcdn.com/7256aff3b67b9fb93fa4a48ce15e8540/5fb94c8b/video/tos/useast2a/tos-useast2a-ve-0068c003/4a1ef598f220462ea4e77ab1b321a7f9/?a=1233&br=6224&bt=3112&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201121112103010188032168500276DF&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3VpcGpzdWdydzMzNzczM0ApaTkzOzU2NWUzNzs3ZTlkOGdiczIubzA0cjBfLS0yMTZzcy0zMi1iXmBiNi4xYzIuNDI6Yw%3D%3D&vl=&vr="
          url="https://d28cdhge7i53l0.cloudfront.net/dubs/162eaa18-4c43-4069-952a-996e71e57f60.mp4"
          channel="youneszarou"
          description="Fun"
          song="Justin-Birbal"
          likes={600}
          messages={400}
          shares={250}
        />
        <Video />
      */}
      </div>
    </div>
  );
}

export default App;
