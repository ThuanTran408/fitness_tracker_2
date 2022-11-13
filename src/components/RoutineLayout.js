import CreateActivityForm from "./CreateActivityForm"

const RoutineLayout = ({routine, token, routineId, setIsUpdated}) => {
    return (
                <div key={routine.id} className="card" >
                    <div className="card-body border border-primary" >
                        <h4 className="card-title text-primary" >Routine Name: {routine.name}</h4> 
                        <h5 className="card-text" >Routine Goal: {routine.goal}</h5>
                        <h6 className="text-danger">Created By: {routine.creatorName}</h6>
                    </div>

                    <CreateActivityForm token={token} routineId={routineId} setIsUpdated={setIsUpdated}/>
                    
                    <center>{
                        routine.activities && routine.activities.map(activity => {
                            if (!routine.activities) {
                                return null
                            }
                            const { id, name, description, count, duration} = activity
                            return (
                            <div key={activity.id} className="card-body border border-success">
                                <h5 className="text-success">Activities for this routine:</h5>
                                <h6>id: {id}</h6>
                                <h6>name: {name}</h6>
                                <h6>description: {description}</h6>
                                <h6>count: {count}</h6>
                                <h6>duration: {duration}</h6>
                            </div>
                            )
                        })
                    }
                    </center>
                </div>
    )
}

export default RoutineLayout;