import { useState, useEffect } from "react";
import axios from "axios";
import Character from "../components/Character";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  // STATE
  const [characters, setCharacters] = useState();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mahe-marvel-back.herokuapp.com/characters/?skip=${skip}&limit=${limit}`
        );
        setCharacters(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  const handleCharacter = (id) => {
    history.push(`/comics/${id}`, { id: id });
    console.log(id);
  };

  // console.log(characters.results);
  return (
    <>
      <div className="allCharacters">
        {loading ? (
          characters.results.map((elem) => {
            // console.log(elem);
            return (
              <div key={elem._id} onClick={() => handleCharacter(elem._id)}>
                <Character data={elem} />
              </div>
            );
          })
        ) : (
          <p>en cours de chargement..</p>
        )}
      </div>
      <div>Home</div>
    </>
  );
};

export default Home;
