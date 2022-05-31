import SingleColor from "./SingleColor";
import Values from 'values.js';
import { Grid } from '@chakra-ui/react'
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setError(false);
      setColorList(new Values(color).all(10));
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <main className="container">
      <article>
        <section className="form">
          <h2>Color Generator</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="#f15025" value={color} onChange={(e) => setColor(e.target.value)}
              className={error ? "border" : null} />
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="palette">
          <Grid templateColumns='repeat(7, 0fr)'>
            {
              colorList.map((item, index) => (
                <SingleColor {...item} key={index} />
              ))
            }
          </Grid>
        </section>
      </article>
    </main>
  )
};

export default App;
