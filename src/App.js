import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className='App'>
      <Person
        name='Ay_Tech'
        email='aytech@gmail.com'
        age={17}
        isMarried={true}
        friends={["Jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
