import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AllComics = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mahe-marvel-back.herokuapp.com/comics?title=${search}`
        );
        setComics(response.data.results);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);
  //   console.log(comics);
  return loading ? (
    <div className="all-comics">
      {comics.map((elem) => {
        return (
          <div key={elem._id}>
            <p>{elem.title}</p>
            <img
              src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              alt={elem.name}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <p>en cours de chargement..</p>
  );
};

export default AllComics;
