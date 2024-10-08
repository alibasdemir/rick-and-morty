import "./favorite.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable react/prop-types */
const Favorite = ({ isLiked, onClick }) => {
  const handleClick = () => {
    if (isLiked) {
      toast.warning("Removed from favorites! 👎", {
        position: "top-right",
        style: {
          backgroundColor: 'rgb(214, 61, 46)',
          color: '#ffffff',
          borderRadius: '5px',
        },
        progressStyle: {
          background: '#f0f0f0'
        },
      });
    } else {
      toast.success("Added to favorites! 👍", {
        position: "top-right",
        style: {
          backgroundColor: 'rgb(85, 204, 68)',
          color: '#ffffff',
          borderRadius: '5px',
        },
        progressStyle: {
          background: '#f0f0f0'
        }
      });
    }
    onClick();
  };

  return (
    <>
      <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={handleClick}>
        <div className="like-wrapper">
          <div className="ripple"></div>
          <svg className="heart" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
          </svg>
          <div className="particles" style={{ "--total-particles": 6 }}>
            <div className="particle" style={{ "--i": 1, "--color": "#7642F0" }}></div>
            <div className="particle" style={{ "--i": 2, "--color": "#AFD27F" }}></div>
            <div className="particle" style={{ "--i": 3, "--color": "#DE8F2E" }}></div>
            <div className="particle" style={{ "--i": 4, "--color": "#D051E1" }}></div>
            <div className="particle" style={{ "--i": 5, "--color": "#5686F2" }}></div>
            <div className="particle" style={{ "--i": 6, "--color": "#D53A9D" }}></div>
          </div>
        </div>
      </button>
    </>
  );
};

export default Favorite;
