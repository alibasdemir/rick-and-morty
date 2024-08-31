import "./supportUs.css";

function SupportUs() {
  return (
    <>
      <article className="articleSupport">
        <h1>Support The Rick and Morty API</h1>
        <p>
          <strong>
            Help to maintain The Rick and Morty API`s infrastructure!
          </strong>
        </p>
        <p>
          If you are using the API for your app, your online tutorials or your
          coding challenges, please consider supporting us to help keep the
          project alive.
        </p>
        <p>
          We are not getting any money from this and we use our free time to
          keep the API running and the data up to date. Every contribution,
          however big or small, is super valuable for our future.
        </p>
        <p>Thanks!</p>
        <div className="iconsSupport">
          <a href="https://github.com/alibasdemir" rel="noopener noreferrer" target="_blank">
            <img
              src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
              alt="Buy Me A Coffee - Ko-fi"
            />
          </a>
          <a href="https://github.com/alibasdemir" rel="noopener noreferrer" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
              alt="Buy Me A Coffee"
            />
          </a>
        </div>
      </article>
    </>
  );
}

export default SupportUs;
