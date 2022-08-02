const LiveBox = ({ icon, name, value, unit }) => {
  return (
    <div className="box white-border">
      <div className="icon icon-outer">{icon}</div>
      <div>
        <h4>
          {value} {unit}
        </h4>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default LiveBox;
