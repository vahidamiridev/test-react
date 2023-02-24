

function drawOneCircle (){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
} 



const SettingOfCanvas = (Component)=>{
    
    return ({props})=>{
        return <Component
                drawOneCircle={drawOneCircle}
                {...props}
        />
    }
}
export default SettingOfCanvas


