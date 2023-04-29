import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ShoppingCarro from "./components/ShoppingCarro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          
          <NavBar/>
          <ShoppingCarro/>
        </Provider>
      </div>
    </>
  );
}

export default App;
