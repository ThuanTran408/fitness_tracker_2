import {Link} from 'react-router-dom'

const Home = ({user}) => {
    return (
        <center>
        <div>
            <h1>Welcome to Fitness Trackr 2!</h1>
            { user && (
                <p>
                    Logged in as <Link to="/profile"> { user.username }</Link>
                </p>
            )}
            <img src="https://t3.ftcdn.net/jpg/02/85/28/36/360_F_285283630_DRK2w48tfFM2J1heFAfSi85tM9T8vpwz.jpg" alt="Italian Trulli"></img>
        </div>
        </center>
    )
}

export default Home;