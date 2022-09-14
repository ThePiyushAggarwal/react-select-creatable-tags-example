import Creatable from 'react-select/creatable'
import { useState } from 'react'

const data = [
  { value: 'laptop', label: 'laptop' },
  { value: 'pen drive', label: 'pen drive' },
  { value: 'ssd', label: 'ssd' },
  { value: 'mouse', label: 'mouse' },
]

const data2 = [
  { value: 'laptop', label: 'laptop' },
  { value: 'ssd', label: 'ssd' },
]

function App() {
  const [selected, setSelected] = useState(data2)

  return (
    <>
      <Creatable
        isMulti
        value={selected}
        options={data}
        onChange={(data) => setSelected(data)}
      />

      <p>{JSON.stringify(selected)}</p>
    </>
  )
}

export default App
