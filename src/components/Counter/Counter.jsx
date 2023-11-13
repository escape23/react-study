const Counter = () => {
  let counter = 0;

  const handleClick = (e) => {
    console.log("e", e);
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div
        className="card bg-dark text-white rounded-4"
        style={{ width: "600px" }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1">Counter</h5>
          <p className="card-text  text-center" style={{ fontSize: "80px" }}>
            {counter}
          </p>
          <div className="d-flex justify-content-center px-5">
            <button
              className="btn btn-outline-success me-5 px-4 rounded-4"
              onClick={handleClick}>
              <i className="bi bi-plus-circle fs-1"></i>
            </button>
            <button className="btn  btn-outline-danger ms-5 px-4 rounded-4">
              <i className="bi bi-dash-circle fs-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
