import { useMemo, useState } from "react"

export default function UseMemo() {
     const [countone, setCountone] = useState(0)
     const [counttwo, setCounttwo] = useState(0)
     const increment = () => {
          
          setCountone(countone + 1)
     }     
     const decrement = () => {
          setCounttwo(counttwo - 1)
     }  
     const isEven = useMemo(() => {
          for (let i = 0; i < 1000000000; i++){}
          return countone%2 === 0
     
     },[countone])
    
  return (
       <div>
            <button onClick={increment} className="my_btn border-2">increment { countone}</button>
            <h1 className=" py-3">
                 {isEven? "Even" : "Odd"}
            </h1>
            <button onClick={decrement} className="my_btn border-2">decrement { counttwo }</button>
    </div>
  )
}
