import React from "react";
import Wrapper from "../../HOC/Wrapper";
import SettingOfCanvas from '../../helper/settingOfCanvas'


const Whiteboard = (props) =>{
    return(
        <Wrapper>
              <canvas id="canvas" width="600px" height="500px" style={{
                border :'1px solid red'
              }}></canvas>
        </Wrapper>
    )
}
export default SettingOfCanvas(Whiteboard)