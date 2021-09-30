import React, { useState } from "react";
import "./styles.css";

var ytDic = {
  Educational: [
    { name: "Kurzgesagt", rating: "5/5" },
    { name: "What I've Learned", rating: "4/5" },
    { name: "CrashCourse", rating: "4.5/5" },
    { name: "Academic Agent", rating: "4/5" }
  ],
  Programming: [
    { name: "Tanay Pratap", rating: "5/5" },
    { name: "freecodecamp", rating: "4.5/5" },
    { name: "Fireship", rating: "4/5" },
    { name: "mycodeschool", rating: "4/5" }
  ],
  Comedy: [
    { name: "Ryan Long", rating: "5/5" },
    { name: "Meme Analysis", rating: "5/5" },
    { name: "Casually Explained", rating: "4/5" },
    { name: "PewDiePie", rating: "4/5" }
  ],
  Philosophy: [
    { name: "The School of Life", rating: "5/5" },
    { name: "Sisyphus-55", rating: "4.5/5" },
    { name: "Academy of Ideas", rating: "4/5" },
    { name: "exurb1a", rating: "4/5" }
  ],
  Infotainment: [
    { name: "CGP Gray", rating: "5/5" },
    { name: "Vsauce", rating: "4.5/5" },
    { name: "Wisecrack", rating: "4/5" },
    { name: "Honestly", rating: "4/5" }
  ]
};

var ytData = Object.keys(ytDic);

export default function App() {
  var [showYt, setShowYt] = useState("Programming");

  function clickHandler(genre) {
    setShowYt(genre);
  }

  return (
    <div className="App">
      <h1 className="head">🎥 ReccomendTuber </h1>
      <h3>
        This web-app recommends some of my favourite youtube channels based on
        genres! Click on the genre for the list..
      </h3>
      <h2>Genres 👇</h2>
      <div className="btn">
        {ytData.map((genre) => (
          <button className="btn-style" onClick={() => clickHandler(genre)}>
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>

      <ul className="lists">
        {ytDic[showYt].map((channel) => (
          <li>
            <div className="list-block">
              <h3> {channel.name} </h3>
              <p> Rating : {channel.rating} </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
