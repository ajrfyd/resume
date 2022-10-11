import React from "react";
import Select from "./Select";

const options = [
  {
    label: 'first',
    value: 1
  },
  {
    label: 'second',
    value: 2
  },
  {
    label: 'third',
    value: 3
  },
  {
    label: 'fourth',
    value: 4
  },
  {
    label: 'fifth',
    value: 5
  }
]

const App = () => {

  return (
    <>
      <Select options={options} onChange={(e) => console.log(e)}/>
    </>
  )
}

export default App;