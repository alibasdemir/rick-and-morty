import { useEffect, useState } from "react";
import { getAllCharacters } from "../utils/axiosApi";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import { useNavigate, useLocation } from "react-router-dom";

function CardContainer() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  const query = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(query.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
    const fetchData = async (page = 1) => {
      try {
        const data = await getAllCharacters(page);
        console.log("API Response:", data);
        if (data.results) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
          setNextPageUrl(data.info.next);
          setPrevPageUrl(data.info.prev);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (err) {
        console.error("Error fetching characters:", err);
        setError(err.message);
      }
    };

    fetchData(pageFromUrl);
  }, [pageFromUrl]); 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

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
          <br />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
            nextPageUrl={nextPageUrl}
            prevPageUrl={prevPageUrl}
          />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CardContainer;
