const RecentList = ({ dataset }) => {
  const numbers = [1, 2, 3, 4];
  return (
    <>
      <h3>Recent Incoming Data</h3>
      {numbers.map((num) => (
        <div className="outer-container" key={num}>
          <p>Air Monitor: Place</p>
          <p>
            {dataset[dataset.length - num].dustDensity < 100 ? "Good" : "Bad"}
          </p>
          <p>
            {dataset[dataset.length - num].date}{" "}
            {dataset[dataset.length - num].time}
          </p>
        </div>
      ))}
    </>
  );
};

export default RecentList;
