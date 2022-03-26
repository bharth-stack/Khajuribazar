import logo from "./logo.svg";
import classes from "./App.module.css";
import Side from "./components/SideDetails/Side.js";
import Login from "./components/Login/Login.js";

function App(props) {
  return (
    <div className={classes.App}>
      <Side></Side>
      <Login class={classes.Appp2}></Login>
    </div>
  );
}

export default App;
