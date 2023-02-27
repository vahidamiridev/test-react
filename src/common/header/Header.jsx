import React from "react";
import {  useNavigate } from "react-router-dom";
import Whiteboard from "../../pages/whiteboard/Whiteboard";

const Header = () => {


  const navigate = useNavigate();
  const [tabs , setTabs] = React.useState([])
  const [arrayBoards , setArrayBoards] = React.useState([])

  const goToNewpage=(e , id)=>{
  let newArrayBoard = [...arrayBoards]
  navigate(`/whiteboard/${id}`)
  }



        const newElement = React.createElement('div',{
            className:"cursor-pointer relative flex justify-center items-center m-2 bg-green-600 text-white w-9 h-9 rounded-full border-black-lg hover:bg-green-700 ",
            onClick:(e)=>goToNewpage(e , tabs.length +1) , 
            id:`page-${tabs.length +1}`,
            key :`page-${tabs.length +1}`
        },React.createElement("span", null, `${tabs.length +1}`),
        React.createElement('span' , {
          className:"cursor-pointer absolute right-[-40%] top-[-25%] bg-red-600 text-white rounded-full w-5 h-5 text-center hover:bg-red-700",
          id:`exit-${tabs.length +1}`
        },'*')
        )
        
        const createNewTabAndPageAndAddToArray =()=>{
          let ArrayOfTabs = [...tabs]
          let newArrayBoards = [...arrayBoards]
          if(ArrayOfTabs.length >9 || newArrayBoards.length > 9)return
            ArrayOfTabs.push(newElement)
            newArrayBoards.push(<Whiteboard/>)
            setTabs(ArrayOfTabs)
            setArrayBoards(newArrayBoards)
        }
   

  return (
    <>
      <section id="header" className="w-full h-[50px] bg-yellow-500 flex items-center">
        <div onClick={createNewTabAndPageAndAddToArray} className="cursor-pointer flex justify-center items-center m-2 bg-pink-500 text-white w-8 h-8 rounded-full border-black-lg " >
            <span>+</span>
        </div>
        {tabs}
   
     
        
      </section>
    </>
  );
};
export default Header;
