import { useState } from "react";
import "./App.css";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  console.log(featPupId);
  return (
    <>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <p
          key={puppy.id}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
        >
          {puppy.name}
        </p>
      ))}
    </>
  );
}

export default App;
