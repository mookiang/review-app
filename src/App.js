import React from 'react';
import PropTypes from "prop-types";

function Drama({name, actor, rating}) {  
  return (
    <div>
      <h1>I Like {name} by {actor}</h1>
      <h3>{rating}</h3>
    </div>
  );
}

Drama.propTypes = {
  name: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const dramaILike = [
  {
    id: 1,
    name: "My Mister",
    actor: "IU",
    rating: 5,
  },
  {
    id: 2,
    name: "Woods of Secret",
    actor: "Cho SeungWoo",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Dokkaebi",
    actor: "Kim GoEun"    ,
    rating: 4.5,
  },
];

function App() {
  return (
    <div>      
      {dramaILike.map(drama => (
        <Drama  key={drama.id} name={drama.name} actor={drama.actor} 
          rating={drama.rating} />
      ))}
    </div>
  );
}

export default App;
