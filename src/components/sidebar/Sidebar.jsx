import { Link , NavLink } from "react-router-dom";

export default ()=>{

const drawCircleHandler =()=>{
    console.log('drawCircle')
}

    return(

        <>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/whiteboard'>Whiteboard</NavLink></li>
            <button className="px-2 py-1 bg-green-500 text-white"

            onClick={drawCircleHandler}
            > Draw-Circle</button>
        </ul>
        </>
    )
}