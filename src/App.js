import "./App.css";
import Capi from "./Components/Capi";
import Header from "./Components/Header";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <Header></Header>
      <Capi />
    </div>
  );
}

export default App;
