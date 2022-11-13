import Routines from "./Routines";
import { myRoutines } from "../utilities";
import { useState, useEffect} from 'react'
import RoutineLayout from "./RoutineLayout";

const Profile = ({user, routines, setRoutines, token, setIsUpdated}) => {
    useEffect(() => {
        if (!user) return;
        const getRoutines = async () => {
            try {
                const data = await myRoutines( user.username, null )
                setRoutines(data);
            } catch (error) {
                console.log('error :>> ', error);
            }
        };
        getRoutines()
    }, [user]);

    
    if (!user) return null;

    return (
        <div>
            <center><h1>{user.username}'s Routines</h1></center> 
            <div>
                {       
                routines?.map(routine => (
                <RoutineLayout key={routine.id} routine={routine} routineId={routine.id} token={token} setIsUpdated={setIsUpdated}/>
                ))
                }
            </div>
        </div>
    );
};

export default Profile;