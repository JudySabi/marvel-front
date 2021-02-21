import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CharacterById from "../components/CharacterById";

const Comics = () => {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);
  const location = useLocation();

  const { id } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mahe-marvel-back.herokuapp.com/comics/${id}`
        );
        setComics(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  // console.log(id);
  // console.log(comics);
  return loading ? (
    <CharacterById data={comics} />
  ) : (
    <p>en cours de chargement..</p>
  );
};

export default Comics;
