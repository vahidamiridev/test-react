import Wrapper from "../../HOC/Wrapper"
import loading from '../../assets/Bean Eater-1s-200px.svg'

export default ()=>{
    return(
        <Wrapper>
            <div className="w-full h-full z-20 flex justify-center items-center ">
             <div className="w-[15%] h-[15%]">
             <img src={loading}
              alt="it is svg" />
             </div>
            </div>
            



        </Wrapper>
    )
}