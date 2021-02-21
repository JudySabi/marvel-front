const CharacterById = ({ data }) => {
  return (
    <div className="CharacterById">
      <p>{data.name}</p>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={data.name}
      />
      <div className="comics-of-Character">
        <h2> TOUT SES COMICS :</h2>
        {data.comics.map((elem) => {
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
    </div>
  );
};

export default CharacterById;
