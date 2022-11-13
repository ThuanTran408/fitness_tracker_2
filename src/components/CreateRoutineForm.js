import { useState } from "react";
import { callApi } from "../utilities";


const CreateRoutineForm = ({ setRoutines, token, setIsUpdated }) => {

    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

    const createRoutine = async (event) => {
        event.preventDefault();
        try {
        const routine = await callApi ({
            method: "POST",
            path: "/routines", 
            token,
            body: {
                name,
                goal,
                isPublic: true          
            },
    });
        setName("");
        setGoal("");
        setIsUpdated((prev) => !prev)

        } catch (error) {
        console.log(error);
    }
    };

    return (
        <>
        <h4 className="text-primary">Create a Routine</h4>
        <form onSubmit={createRoutine} className="mb-4">
            <label htmlFor="title">Routine</label>
            <input
            type="text"
            name="title"
            className="form-control"
            placeholder="add routine name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="title">Goal</label>
            <input
            type="text"
            name="description"
            className="form-control"
            placeholder="add routine goal"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-2">
            Add Routine
            </button>
        </form>
        </>
    );
};

export default CreateRoutineForm;