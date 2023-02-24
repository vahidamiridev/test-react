import Wrapper from "../../HOC/Wrapper"
export default ({title , body , id })=>{
        return (
            <Wrapper>
                    <div className="width-[300px] height-[500px] m-auto bg-pink-400 rounded-lg shadow-lg p-1 mt-1">
                        <h4 className="m-5 bg-gray-300">{title}</h4>
                    </div>

            </Wrapper>
        )
}