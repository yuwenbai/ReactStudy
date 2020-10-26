import * as React from "react"
export default function PrimitiveTest() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("")
  // const [name1, setName1] = React.useState("")
  console.log("PrimitiveTest PrimitiveTest render")
  React.useEffect(() => {
    setInterval(() => {
      setCount(x => x + 1)
    }, 1000)
  }, [])
  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
      />
      {/* <div> {name1} </div> */}
      <div>counter:{count}</div>
      <Child name={name} />
    </>
  )
}
// memo包裹，保证props不变的时候不会重渲染
const Child = React.memo(function Child(name) {
  console.log("child render", name)
  return <div>name:{name}</div>
})