import "../Card/card.css";

/* eslint-disable react/prop-types */
function Card({
  charImg,
  charImgName,
  charUrl,
  charName,
  charStatus,
  charSpecies,
  locationUrl,
  locationName,
  episodeUrl,
  episodeName,
}) {
  return (
    <>
      <article className="articleCard">
        <div className="divImg">
          <img src={charImg} alt={charImgName} />
        </div>
        <div className="divCharacterCard">
          <div className="section">
            <a
              href={charUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="apiLink"
            >
              <h2>{charName}</h2>
            </a>
            <span className="status">
              <span className="statusIcon"></span> {charStatus} - {charSpecies}
            </span>
          </div>
          <div className="section">
            <span className="textGray">Last known location:</span>
            <a
              href={locationUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="apiLink"
            >
              {locationName}
            </a>
          </div>
          <div className="section">
            <span className="textGray">First seen in:</span>
            <a
              href={episodeUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="apiLink"
            >
              {episodeName}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
