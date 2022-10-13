import "./List_People.css";

const List = ({ props }) => {
  return (
    <>
      {props.map((item) => {
        const { key, image, name, text, age } = item;
        return (
          <div id={key} className="myCard">
            <img className="" src={image} alt={name} />
            <div className="text_card">
              <h6>{name}</h6>
              <p>{text}</p>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
