import { useEffect, useState, useRef } from "react"
import BoxColor from "./BoxColor";

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']

  const [value, setValue] = useState("")
  const inputRef = useRef(null)

  return (
    <>
      <input id="color" type="text" className="input" placeholder="Añade el color" onChange={()=> setValue(inputRef.current.value)} value={value} ref={inputRef}/>
      <div>{value}</div>

      <div className="container">
        {colors.map((color, i) => (
          <BoxColor key={i} className="box" color={color} value={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;