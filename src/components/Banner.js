function Banner(props) {
  return (
    <div id={"banner"}>
      {props.title}
      <h4>{props.total}</h4>
    </div>
  );
}

export default Banner;
