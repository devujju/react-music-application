import React, { useEffect, useState } from "react";
import Player from "./components/Player";

const App = () => {
  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "./images/titaliya.jpg",
      src: "./music/192-Care Ni Karda - Chhalaang 192 Kbps.mp3",
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./music/192-Care Ni Karda - Chhalaang 192 Kbps.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/care-ni-karda.jpg",
      src: "./music/192-Care Ni Karda - Chhalaang 192 Kbps.mp3",
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "./images/burjkalifa.jpg",
      src: "./music/192-Care Ni Karda - Chhalaang 192 Kbps.mp3",
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: "./images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
      src: "./music/Burj_Khalifa_Himmat_Sandhu.mp3",
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
      src: "./music/Burj_Khalifa_Himmat_Sandhu.mp3",
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: "./images/Ashnikko-Daisy.jpg",
      src: "./music/Burj_Khalifa_Himmat_Sandhu.mp3",
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: "./images/PatzGrimbard-DollySong.jpg",
      src: "./music/Burj_Khalifa_Himmat_Sandhu.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
