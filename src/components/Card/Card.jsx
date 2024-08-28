import "../Card/card.css";

function Card() {
  return (
    <>
    {/* JUST EXAMPLE FOR STYLE
    TO DO -- FETCH/AXIOS  */}
      <section className="sectionCard">
        <div className="divCard">
          <article className="articleCard">
            <div className="divImg">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/105.jpeg"
                alt="Dr. Glip-Glop"
              />
            </div>
            <div className="divCharacterCard">
              <div className="section">
                <a
                  href="https://rickandmortyapi.com/api/character/105"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="apiLink"
                >
                  <h2>Dr. Glip-Glop</h2>
                </a>
                <span className="status">
                  <span className="statusIcon"></span> Dead - Alien
                </span>
              </div>
              <div className="section">
                <span className="textGray">Last known location:</span>
                <a
                  href="https://rickandmortyapi.com/api/location/16"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="apiLink"
                >
                  St. Gloopy Noops Hospital
                </a>
              </div>
              <div className="section">
                <span className="textGray">First seen in:</span>
                <a
                  href="https://rickandmortyapi.com/api/episode/19"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="apiLink"
                >
                  Interdimensional Cable 2: Tempting Fate
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Card;
