import { useNavigate } from "react-router-dom";

const DashBoard = () => {
    const Navigate = useNavigate();
    const handlerClick=()=> {
        Navigate('/')
    }
    return(
        <div className='container'>
            <button className="btn btn-danger" onClick={handlerClick}>Log Out</button>
        </div>
    )
}

export default DashBoard