import { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  //   handleIncrement = () => {
  //     // this.state.counter++;
  //     // console.log(this.state.counter);
  //     // this.setState({
  //     //   counter: 1,
  //     // });
  //     this.setState((prevState) => {
  //       return {
  //         counter: prevState.counter + 1,
  //       };
  //     });
  //   };

  //   handleDecrement = () => {
  //     this.setState((prevState) => {
  //       return {
  //         counter: prevState.counter - 1,
  //       };
  //     });
  //   };

  handleClick = (isIncrement) => {
    this.setState((prevState) => {
      return {
        counter: isIncrement ? prevState.counter + 1 : prevState.counter - 1,
      };
    });
  };

  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="card bg-dark text-white rounded-4"
          style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text  text-center" style={{ fontSize: "80px" }}>
              {this.state.counter}
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5 px-4 rounded-4"
                onClick={() => this.handleClick(true)}>
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
              <button
                className="btn  btn-outline-danger ms-5 px-4 rounded-4"
                onClick={() => this.handleClick()}>
                <i className="bi bi-dash-circle fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
