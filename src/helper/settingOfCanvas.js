

export const drawOneCircle =(canvasId = 'canvas-1' , color="red")=>{
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokStyle = color
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
} 



const settingOfCanvas = (Component)=>{
    
    return ({props})=>{
        return <Component
                drawOneCircle={drawOneCircle}
                {...props}
        />
    }
}
export default settingOfCanvas


