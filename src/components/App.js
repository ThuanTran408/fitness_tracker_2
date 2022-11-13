import { Routes, Route, Link, useNavigate} from 
'react-router-dom';
import Home from './Home';
import Activities from './Activities'
import Routines from './Routines'
import Profile from './Profile';
import AccountForm from './AccountForm';
import { useEffect, useState } from 'react';
import { fetchRoutines, fetchActivities, fetchUser } from '../utilities';

const App = () => {
    const navigate = useNavigate();

    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);
    const [token, setToken] = useState(
        window.localStorage.getItem("token") || ""
    );
    const [user, setUser] = useState(null);

    const logout = () => {
        setToken("");
        setUser(null);
        navigate("/");
    };

    useEffect(() => {
        const getRoutines = async () => {
            const routines = await fetchRoutines()
            setRoutines(routines)
        }
        getRoutines();
    }, [token, isUpdated])

    useEffect(() => {
        const getActivities = async () => {
            const activities = await fetchActivities()
            setActivities(activities)
        }
        getActivities();
    }, [token, isUpdated])

    useEffect(() => {
        if (token) {
        const getUser = async () => {
            const user = await fetchUser(token);
            setUser(user);
        };
        getUser();
        }
    }, [token]);


    useEffect(() => {
        window.localStorage.setItem("token", token);
    }, [token]);


    return (
        <div className='p-3'>
            <nav className='d-flex justify-content-between mb-4'>
            <div>
            <Link className='me-2' to="/">Home</Link>
            <Link className='me-2' to="/routines">Routines</Link>
            <Link className='me-2' to="/activities">Activities</Link>
            <Link to="/profile">Profile</Link>
            </div>
            <div>
            {token ? (
                <button className="btn btn-link" onClick={logout}>
                Log out
                </button>
            ) : (
                <>
                <Link className="me-2" to="/account/login">
                    Login
                </Link>
                <Link to="/account/register">Register</Link>
                </>
            )}
            </div>
            </nav>
            <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route
            path="/routines"
            element={<Routines token={token} routines={routines} setRoutines={setRoutines} activities={activities} setIsUpdated={setIsUpdated} />}
            />
            <Route
            path="/activities"
            element={<Activities token={token} activities={activities}  setActivities={setActivities} setIsUpdated={setIsUpdated} />}
            />
            <Route path="/profile" element={<Profile user={user} token={token} setRoutines={setRoutines} routines={routines} setIsUpdated={setIsUpdated}/>} />
            <Route path='/account/:action' element={<AccountForm setToken={setToken} /> } />
        </Routes>
        </div>
    )
}

export default App;