export default function List() {
  let itemList = [
    ["Tomatoes", 100],
    ["Pasta", 40],
    ["Coconut", 50],
  ];

  return (
    <div className="listContainer">
      <h4 className="title">상품목록</h4>

      {itemList.map((el, i) => {
        return (
          <div className="food" key={i}>
            <h4>
              {el[0]} ${el[1]}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
