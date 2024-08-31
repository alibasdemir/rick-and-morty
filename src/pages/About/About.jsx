import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <article className="articleSupport">
          <h1>About</h1>
          <h3 id="what-is-this">What is this?</h3>
          <p>
            The Rick and Morty API is a REST(ish) and GraphQL API based on the
            television show{" "}
            <a
              href="https://www.adultswim.com/videos/rick-and-morty"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Rick and Morty
            </a>
            . You will have access to about hundreds of characters, images,
            locations and episodes. The Rick and Morty API is filled with
            canonical information as seen on the TV show.
          </p>
          <p>
            <Link to="/documentation">
              Check out the documentation to get started
            </Link>
          </p>
          <h3 id="who-are-you">Who are you?</h3>
          <p>
            We are{" "}
            <a
              href="https://github.com/alibasdemir"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Ali Başdemir
            </a>
            , a guy who likes to develop things and{" "}
            <a
              href="https://github.com/alibasdemir"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Ali
            </a>
            , the `Rick and Morty data scientist` and hardcore fan.
          </p>
          <h3 id="why-did-you-build-this">Why did you build this?</h3>
          <p>
            Because we were really interested in the idea of writing an open
            source project and also because Rick and Morty is our favorite show
            at that moment, so why not?
          </p>
          <h3 id="technical-stuff">Technical stuff?</h3>
          <p>
            The entire project is hosted on{" "}
            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Digital Ocean
            </a>{" "}
            and{" "}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Netlify
            </a>
            . GraphQL cache is handled through{" "}
            <a
              href="https://stellate.co/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Stellate
            </a>
            . We use{" "}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Node
            </a>{" "}
            and{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              MongoDB
            </a>{" "}
            to serve the API.{" "}
          </p>
          <h3 id="how-can-i-contribute-to-the-project">
            How can I contribute to the project?
          </h3>
          <p>
            You can{" "}
            <Link to="/support-us">help us to keep the project alive</Link> and
            you can also contribute on{" "}
            <a
              href="https://github.com/alibasdemir/rick-and-morty"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <h3 id="copyright">Copyright?</h3>
          <p>
            Rick and Morty is created by Justin Roiland and Dan Harmon for{" "}
            <a
              href="https://www.adultswim.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Adult Swim
            </a>
            . The data and images are used without claim of ownership and belong
            to their respective owners.
          </p>
          <p>This API is open source and uses a BSD license.</p>
        </article>
      </div>
    </>
  );
}

export default About;
