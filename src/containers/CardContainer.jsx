import { useEffect, useState } from "react";
import { getAllCharacters, getEpisodeName } from "../utils/axiosApi";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate, useLocation } from "react-router-dom";

function CardContainer() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(query.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
    const fetchData = async (page = 1) => {
      try {
        const data = await getAllCharacters(page, searchTerm);
        console.log("API Response:", data);
        if (data.results) {
          setIsEmptyResult(data.results.length === 0);
          const updatedCharacters = await Promise.all(
            data.results.map(async (char) => {
              const episodeName = await getEpisodeName(char.episode[0]);
              return { ...char, episodeName };
            })
          );
          setCharacters(updatedCharacters);
          setTotalPages(data.info.pages);
          setNextPageUrl(data.info.next);
          setPrevPageUrl(data.info.prev);
        } else {
          console.error("Unexpected data format:", data);
          setIsEmptyResult(true);
        }
      } catch (err) {
        console.error("Error fetching characters:", err);
        setError(err.message);
        console.log("Error:", error);

        setIsEmptyResult(true);
      }
    };

    fetchData(pageFromUrl);
  }, [error, pageFromUrl, searchTerm]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1);
      navigate("?page=1");
    }
  }, [searchTerm, navigate]);

  return (
    <>
      {characters.length > 0 ? (
        <section className="sectionCard">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {isEmptyResult ? (
            <p style={{color:"Orange", fontSize:"56px"}}>No results found... 😢</p>
          ) : (
            <>
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
                    episodeName={char.episodeName}
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
            </>
          )}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CardContainer;
