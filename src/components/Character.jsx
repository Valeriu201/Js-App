import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Character() {
  const { id } = useParams(); //numarul (id) din adresa
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((res) => res.json())
      .this((data) => setCharacter(data));
  }, []);

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Character;
