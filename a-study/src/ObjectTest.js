import * as React from "react"
// interface Item {
//   text: string
//   done: boolean
// }

export default function ObjectTest() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("")
  console.log("ObjectTest Parent")
  const item = {
    text: name,
    done: false,
  }
  React.useEffect(() => {
    setInterval(() => {
      setCount(x => x + 1)
    }, 5000)
  }, [])
  return (
    <React.Fragment>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
      ></input>
      <div>counter:{count}</div>
      <Child item={{text: 'Object Test'}} />
    </React.Fragment>
  )
}

const deepEqual = (prev, next)  => {
  if(prev.text === next.text)
    return true
  return false
}
const Child = React.memo(function Child(item) {
  console.log("render child")
  return <div>name:{item.text}</div>
},  (prev, next) => {
    // 使用深比较比较对象相等
    return deepEqual(prev, next)
  })