import { useState } from "react";
import "./Film.css";
import FilmInfo from "./FilmInfo";

const FilmYear = ({data}) => {

  const [secilenTarih, setSecilenTarih] = useState(null)


  return (
    <div className="container shadow p-3 mb-6 rounded-2 mt-5">
      <div className="d-flex align-content-center">
        <div className="list">
          {
            data.map((item) => 
              (<div key={item.id}>
                <button className="button mb-3 me-3 mt-3 p-1 w-100 fs-5 fw-bold shadow border-white bg-secondary-subtle rounded-2" onClick={()=> setSecilenTarih(item.date)}>
                  {item.date}
                </button>
              </div>)
            )
          }
          
          
        </div>
        <div>
          <FilmInfo selectedDate = {secilenTarih} data = {data}/>
        </div>
      </div>
      
    </div>);
};

export default FilmYear;
