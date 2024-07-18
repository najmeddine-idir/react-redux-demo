import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import ItemContainer from "./components/itemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <div className="App">
      {/* <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <NewCakeContainer />
      <IceCreamContainer />
      <HooksIceCreamContainer /> */}
      <UsersContainer />
    </div>
  );
}

export default App;
