
import { useState } from 'react';
import "./App.scss"

function ToggleTheme() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={`container, ${darkTheme ? "Dark" : "Light"}`}>
      <h4>{darkTheme ? "Dark" : "Light"}</h4>


      <button onClick={() => setDarkTheme(!darkTheme)}
      >
        change to {darkTheme ? "Light" : "Dark"}

      </button>

      <p>Regards: NAVEED AIJAZ </p>

    </div>

  )

}

export default ToggleTheme

