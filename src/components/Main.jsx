import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Main() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return(
    <div style={{{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}}>
    {
        characters.length > 0 ?
        characters.map(ch => (
            <link to = {"/character/" + ch.id}>
                <img src={ch.image} alt="" />
              <h1>{ch.name}</h1>
            </link>
        ))
    }
    </div>
  )
}


export default Main;
