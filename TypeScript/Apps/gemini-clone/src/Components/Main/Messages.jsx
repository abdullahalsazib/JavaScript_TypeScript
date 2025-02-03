/* eslint-disable react/prop-types */

function Messages(props) {
  return (
       <>
            <div className={` flex items-center justify-between flex-col gap-5 ${ props.styles } `}>
                 <MainMessageContent/>
                 <MainMessageContent/>
                 <MainMessageContent/>  
                 <MainMessageContent/>
            </div>
       </>
  )
}

export default Messages

const MainMessageContent = () => {
     return (<><div className=" self-end border-[1px] border-gray-500 text-sm py-2 px-6 rounded-b-[19px] rounded-l-[19px] capitalize bg-[#3c3c3c]">
                     Lorem ipsum dolor sit.
                 </div>
                 <div className="self-start py-2 px-5  capitalize text-[16px] w-[90%]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fugit modi optio impedit, consequatur quidem magni tenetur ullam voluptates possimus debitis ratione iste nostrum, unde sequi perferendis! Blanditiis fugit ratione, vero suscipit nihil repudiandae quam ipsum maiores tempora, ex iure.
                 </div></>)
}