import item from "./item"


const FoodItems = ({items}) => {
  
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">Person</li>
        {items.map((item) => (
          <item key={item} fooditem={item}></item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
