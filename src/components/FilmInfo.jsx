import React from "react";
import { Rating } from "react-simple-star-rating";


const FilmInfo = ({selectedDate, data}) => {
  return (
    <div className="ms-5 mt-4">
      {
        data.filter((film) => film.date === selectedDate).map((filteredFilm, index) => (
          <div key={index}>
            <h3 className="text-info">{filteredFilm.title}</h3>
            <p className="fs-5">{filteredFilm.body}</p>
            <p className="text-danger">{filteredFilm.tags.join("/")}</p>
            <div className="d-flex mt-2">
              <Rating className="mt-1" stars = {5} size={20} value={3} precision={0.5} fillColor='orange'/>
              
              <p className="text-danger fs-4 ms-2">{filteredFilm.rate.toFixed(1)} / 10</p>
            </div>
          </div>
          
        ))
      }
    </div>)
};

export default FilmInfo;
