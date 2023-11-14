import Component from "react";
import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    isShowModal: false,
  };
  render() {
    return (
      <div>
        <Counter />
        <Modal></Modal>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <Counter />
//       <Modal></Modal>
//     </div>
//   );
// };

// export default App;
