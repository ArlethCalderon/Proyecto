import {Link} from 'react-router-dom'


const Home = () => {
    const userId=10;
    return(
        <div className='container'>
            <h1>Aplication</h1>
            <Link to= {`/users/${userId}`}>Users</Link>
        </div>
    )
}
export default Home