import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className='App'>
      <Person
        name='Abdulmujeeb'
        email='aytech@gmail.com'
        age={17}
        isMarried={true}
        friends={["Jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
