import "../styles/card.scss";

const Card = ({ item, activeItem, onChangeActiveItem }) => {
  const onChange = () => {
    if (item === activeItem) {
      onChangeActiveItem(null);
    } else {
      onChangeActiveItem(item);
    }
  };
  return (
    <label className={activeItem === item ? "card card-active" : "card"}>
      <div key={item.code} className="card-header">
        <div className="card-title">
          <input
            type="checkbox"
            className="card-checkbox"
            checked={item === activeItem}
            onChange={onChange}
          />
          <h5 className="card-name">
            {item.name}({item.code})
          </h5>
        </div>
        <h5 className="card-emoji">{item.emoji}</h5>
      </div>
      <div className="card-row">
        <p className="card-left">Language</p>
        <p>{item?.languages?.[0]?.name}</p>
      </div>
      <div className="card-row">
        <p className="card-left">Currency</p>
        <p>{item.currency}</p>
      </div>
      <div className="card-row">
        <p className="card-left">Phone</p>
        <p>{item.phone}</p>
      </div>
      <div className="card-row">
        <p className="card-left">Native</p>
        <p>{item.native}</p>
      </div>
    </label>
  );
};

export default Card;
