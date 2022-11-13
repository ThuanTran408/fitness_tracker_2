import { useState } from "react";
import { callApi } from "../utilities";

const CreateActivityForm = ({token, setIsUpdated, routineId}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    

    const createActivity = async (event) => {
        event.preventDefault();
        try {
        const activity = await callApi ({
            method: "POST",
            path: "/activities", 
            token,
            body: {
                name,
                description,
            },
    });
    
        const routineActivity = await callApi ({
            method: "POST",
            path: `/routines/${routineId}/activities`, 
            token,
            body: {
                activityId: activity.id,
                count,
                duration
            },
});   
        setName("");
        setDescription("");
        setCount(0);
        setDuration(0);
        setIsUpdated((prev) => !prev );

        } catch (error) {
        console.log(error);
    }
    };

    return (
        <div>
            <h4 className="text-success">Create a Activity for this Routine</h4>
            <form onSubmit={createActivity} className="mb-4">
                <label htmlFor="name">Activity</label>
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="add activity name"
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                type="text"
                name="description"
                className="form-control"
                placeholder="add activity description"
                value={description}
                onChange={(event) =>setDescription(event.target.value)}
                />
                <label htmlFor="count">Count</label>
                <input
                type="number"
                name="count"
                className="form-control"
                placeholder="add activity count"
                value={count}
                onChange={(event) =>setCount(event.target.value)}
                />
                <label htmlFor="duration">Duration</label>
                <input
                type="number"
                name="duration"
                className="form-control"
                placeholder="add activity duration"
                value={duration}
                onChange={(event) =>setDuration(event.target.value)}
                />
                <button type="submit" className="btn btn-success mt-2">Add Activity</button>
                
            </form>
        </div>
    )
}

export default CreateActivityForm;