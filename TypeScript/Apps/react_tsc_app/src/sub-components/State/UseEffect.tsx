/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

export const UseEffectCompo = ( ) => {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  // const [items, setItems] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log("componentDidMount")
  }, [])
  useEffect(() => {
    console.log("componentDidUpdate")
    fetch(`https://jsonplaceholder.typicode.com/`+content)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
    
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(data => { setProducts(data.products); console.log(data.products[0])})
      .catch(err => console.log(err))
    return () => {
      // clening
      console.log("Unmount")
    }
  }, [content])
 return (
    
    <>
     <div className=" my-5 mx-10 py-10 px-10">
       <div className="w-full bg-[#42a5f5] flex items-center justify-center flex-col gap-5 py-10 px-10">
       <input className="py-3 px-5 inputFild" type="text" placeholder="Enter text's..." />
       <div className="flex items-center justify-center gap-5">
           <button onClick={() => setCount(count + 1)} className='my_btn'>Count: { count }</button>
          <button onClick={()=> setContent("posts")} className='my_btn'>Post</button>
          <button onClick={()=> setContent("users")} className='my_btn'>User</button>
          <button onClick={()=> setContent("comments")} className='my_btn'>Comment</button>
       </div>
     </div>
     <div className="w-full bg-[#99f542] p-3" >
         <h1 className="text-[20px]"> {content} </h1>
         <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
           {
             products.map((item: any) => {
               return (
                 <li key={item.id}>
                 <img src={item.thumbnail} alt="" />
                 <p>
                 {item.title}
                 </p>
               </li>
               )
             })
             
          }
        </ul>
         
       </div>
       
     </div>
    </>
  )
}
