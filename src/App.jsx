import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {

  
    /* Code For Video 39-2 */
  
  function handleClick() {
    alert("Button Clicked");
  }

  function handleClick2() {
    alert("Button Clicked 2");
  }


    const addToFive = (num) => {
      alert (num + 5);
    }


  return (
    <>
      <h3>React Core concepts 2</h3>

      {/* For Video 39-6 */}

      <Friends></Friends>


      {/* For Video 39-5 */}

      <Users></Users>


      {/* For Video 39-4 */}

      <Team></Team>


      {/* For Video 39-3  */}
      <Counter></Counter>


      {/* Code For Video 39-2 */}


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>

      <button onClick={() => alert("Button 3 clicked") }>Third</button>


      <button onClick={() => addToFive(10)}> Button Four</button>

    </>
  );
}

export default App;
