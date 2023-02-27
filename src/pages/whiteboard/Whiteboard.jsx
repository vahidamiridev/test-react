import React, { useEffect } from "react";
import Wrapper from "../../HOC/Wrapper";
import settingOfCanvas from '../../helper/settingOfCanvas'
import { useParams } from "react-router-dom";
import {drawOneCircle} from '../../helper/settingOfCanvas'


const Whiteboard = (props) =>{
  
  const params =useParams()
  const colors = ["red","orange","purple","aqua","black","green","yellow","brown","pink","blue"]
  let canvasId = `canvas-${params.id}`
 

   const drawOneCircle =()=>{
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = colors[params.id-1]
    ctx.fillStyle = colors[params.id-1]
    ctx.lineWidth = 5
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
} 


  

  
React.useEffect(()=>{

  drawOneCircle()

  
},[params.id])



    return(
        <Wrapper>
              <canvas id={canvasId} className="canvas" width="600px" height="500px" style={{
                borderWidth :`5px`,
                borderStyle :'solid',
                borderColor:colors[params.id-1]
              }}></canvas>
        </Wrapper>
    )
}
export default Whiteboard