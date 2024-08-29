import { useEffect, useState } from "react";
import { getAllCharacters } from "../utils/axiosApi";
import Card from "../components/Card/Card";

function CardContainer() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCharacters();
        console.log("API Response:", data);
        if (data.results) {
          setCharacters(data.results);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (err) {
        console.error("Error fetching characters:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error && <p>Error: {error}</p>}
      {characters.length > 0 ? (
        <section className="sectionCard">
          <div className="divCard">
            {characters.map((char) => (
              <Card
                key={char.id}
                charImg={char.image}
                charImgName={char.name}
                charUrl={char.url}
                charName={char.name}
                charStatus={char.status}
                charSpecies={char.species}
                locationUrl={char.location.url}
                locationName={char.location.name}
                episodeUrl={char.episode[0]}
                episodeName={char.episode[0]}
              />
            ))}
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CardContainer;
