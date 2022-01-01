import React, { useState } from "react";
import data from "./data";
import People from "./People"

const App = () => {

  const [people, setPeople] = useState(data)

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>Reviews</h2>
      </div>
        <People people={people}  />
    </section>
  )
};

export default App;
