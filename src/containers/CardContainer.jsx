import { useContext, useEffect, useState } from "react";
import "./cardContainer.css";
import { getAllCharacters, getEpisodeName } from "../utils/axiosApi";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";
import { useNavigate, useLocation } from "react-router-dom";
import { LikeContext } from "../contexts/LikeContext";

function CardContainer() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  const { likedCharacters, handleLike } = useContext(LikeContext); // from context

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(query.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
    const fetchData = async (page = 1) => {
      try {
        const data = await getAllCharacters(
          page,
          searchTerm,
          statusFilter,
          genderFilter
        );
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
        setIsEmptyResult(true);
      }
    };

    fetchData(pageFromUrl);
  }, [error, pageFromUrl, searchTerm, statusFilter, genderFilter]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  const handleStatusChange = (status) => {
    setStatusFilter(statusFilter === status ? "" : status);
  };

  const handleGenderChange = (gender) => {
    setGenderFilter(genderFilter === gender ? "" : gender);
  };

  useEffect(() => {
    if (searchTerm || statusFilter || genderFilter) {
      setCurrentPage(1);
      navigate("?page=1");
    }
  }, [searchTerm, statusFilter, genderFilter, navigate]);

  return (
    <>
      {characters.length > 0 ? (
        <section className="sectionCard">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter
            statusFilter={statusFilter}
            genderFilter={genderFilter}
            onStatusChange={handleStatusChange}
            onGenderChange={handleGenderChange}
          />
          {isEmptyResult ? (
            <p className="noResult">No results found... 😢</p>
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
                    isLiked={likedCharacters[char.id] || false}
                    onLike={() => handleLike(char.id)}
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
        <div className="loading">
          <img
            src="https://huddersfield.exposed/files/loading2.gif"
            alt="Loading"
          />
        </div>
      )}
    </>
  );
}

export default CardContainer;
