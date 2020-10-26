import * as React from "react"
// interface Item {
//   text: string
//   done: boolean
// }

export default function UserMemoObjectTest() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("init")
  // console.log("UserMemoObjectTest Parent")

  React.useEffect(() => {
    setInterval(() => {
      setCount(x => x + 1)
    }, 5000)
  }, [])

  const item = React.useMemo(
    () => ({
      text: name,
      done: false,
    }),
    [name]
  ) // 如果name没变化，那么返回的始终是同一个 item

  return (
    <React.Fragment>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
      ></input>
      <div>counter:{count}</div>
      <Child item={item} />
    </React.Fragment>
  )
}

const deepEqual = (prev, next)  => {
  if(prev.text === next.text)
    return true
  return false
}
// const Child = function Child(item) {
//     console.log("UserMemoObjectTest render child")
//     return <div>name:{item.name}</div>
//   }
const Child = React.memo(function Child(item) {
  // console.log("UserMemoObjectTest render child")
  return <div>name:{item.name}</div>
})