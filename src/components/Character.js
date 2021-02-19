const Character = ({ data }) => {
  // console.log(data.name);
  return (
    <div className="character">
      <p>{data.name}</p>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={data.name}
      />
    </div>
  );
};

export default Character;
