import { createContext, useState, useEffect } from 'react';

export const LikeContext = createContext();

/* eslint-disable react/prop-types */
export const LikeProvider = ({ children }) => {
  const [likedCharacters, setLikedCharacters] = useState(() => {
    const savedLikes = localStorage.getItem('likedCharacters');
    return savedLikes ? JSON.parse(savedLikes) : {};
  });

  useEffect(() => {
    localStorage.setItem('likedCharacters', JSON.stringify(likedCharacters));
  }, [likedCharacters]);

  const handleLike = (charId) => {
    setLikedCharacters((prev) => ({
      ...prev,
      [charId]: !prev[charId],
    }));
  };

  return (
    <LikeContext.Provider value={{ likedCharacters, handleLike }}>
      {children}
    </LikeContext.Provider>
  );
};
