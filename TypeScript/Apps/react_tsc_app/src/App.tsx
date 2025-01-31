import Loggedin from "./sub-components/State/Loggedin"


function App() {
 return (
    
    <>
      <hr />
      {/* <div className="flex flex-col items-center justify-center py-10">
         <MyInput handleEvent={handleChange}/>
         <MyButton styles={{border: '1px solid red'}} handleClick={() => handleClick()} />
     </div> */}
     <Loggedin/>
    </>
  )
}

export default App