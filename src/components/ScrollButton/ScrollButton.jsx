import "./scrollButton.css";

function ScrollButton() {
  const scroll = (direction) => {
    window.scrollBy(0, direction === "up" ? -10000 : 10000);
  };

  return (
    <div className="scroll-buttons">
      <button className="scroll-btn up-btn" onClick={() => scroll("up")}>
        &#9650;
      </button>
      <button className="scroll-btn down-btn" onClick={() => scroll("down")}>
        &#9660;
      </button>
    </div>
  );
}

export default ScrollButton;
