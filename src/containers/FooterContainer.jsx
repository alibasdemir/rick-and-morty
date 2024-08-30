import { useEffect, useState } from "react";
import { getAllCharactersCount, getAllLocations, getAllEpisodes } from "../utils/axiosApi";
import Footer from "../components/Footer/Footer";

function FooterContainer() {
  const [characterCount, setCharacterCount] = useState(0);
  const [locationCount, setLocationCount] = useState(0);
  const [episodeCount, setEpisodeCount] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [characterData, locationData, episodeData] = await Promise.all([
          getAllCharactersCount(),
          getAllLocations(),
          getAllEpisodes()
        ]);

        if (characterData.results) {
          setCharacterCount(characterData.info.count);
        } else {
          console.error("Unexpected data format for characters:", characterData);
        }

        if (locationData.results) {
          setLocationCount(locationData.info.count);
        } else {
          console.error("Unexpected data format for locations:", locationData);
        }

        if (episodeData.results) {
          setEpisodeCount(episodeData.info.count);
        } else {
          console.error("Unexpected data format for episodes:", episodeData);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Footer
        totalCharacters={characterCount}
        totalLocations={locationCount}
        totalEpisodes={episodeCount}
      />
    </>
  );
}

export default FooterContainer;
