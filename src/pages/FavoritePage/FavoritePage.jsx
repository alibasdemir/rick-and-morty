import { useContext, useState, useEffect } from "react";
import { LikeContext } from "../../contexts/LikeContext";
import { getCharacterById } from "../../utils/axiosApi";
import "./favoritePage.css";
import Favorite from "../../components/Favorite/Favorite";

function FavoritePage() {
  const { likedCharacters, handleLike } = useContext(LikeContext);
  const [favoriteDetails, setFavoriteDetails] = useState([]);
  const [flippedId, setFlippedId] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const likedIds = Object.keys(likedCharacters).filter(
        (id) => likedCharacters[id]
      );
      const characterPromises = likedIds.map((id) => getCharacterById(id));
      const characters = await Promise.all(characterPromises);
      setFavoriteDetails(characters);
    };

    fetchFavorites();
  }, [likedCharacters]);

  const handleCardClick = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  const getStatusImage = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "/images/alive.png";
      case "dead":
        return "/images/dead.png";
      default:
        return "/images/unknown.png";
    }
  };

  const getStatusLabel = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "Alive";
      case "dead":
        return "Dead";
      default:
        return "Unknown";
    }
  };

  const getStatusBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return { backgroundColor: "rgb(85, 204, 68)" };
      case "dead":
        return { backgroundColor: "rgb(214, 61, 46)" };
      default:
        return { backgroundColor: "rgb(158, 158, 158)" };
    }
  };

  return (
    <div className="favorite-page">
      <div className="favorite-list">
        {favoriteDetails.length > 0 ? (
          favoriteDetails.map((char) => (
            <div key={char.id} className="favorite-item">
                <div className="status-badge" style={getStatusBadgeStyle(char.status)}>
                  {getStatusLabel(char.status)}
                </div>
              <div className="image-container">
                <div
                className={`flip-card ${flippedId === char.id ? 'flipped' : ''}`}
                onClick={() => handleCardClick(char.id)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={char.image} alt={char.name} />
                    </div>
                    <div className="flip-card-back">
                      <img src={getStatusImage(char.status)} alt={char.status} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="favorite-details">
                <h2>{char.name}</h2>
                {/* <p>Status: {char.status}</p>
                <p>Gender: {char.gender}</p> */}
              </div>
              <Favorite
                isLiked={likedCharacters[char.id] || false}
                onClick={() => handleLike(char.id)}
              />
            </div>
          ))
        ) : (
          <p className="noFavorite">No favorite characters yet 😒</p>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;
