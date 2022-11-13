const Activities = ({activities}) => {
    return (
        <div>
            <center><h1>Activities</h1></center>
            {
            activities.map(activities => 
                <div key={activities.id} className="card" >
                    <div className="card-body" >
                        <h4 className="card-title text-success" >Activity Name: {activities.name}</h4> 
                        <h6 className="card-text" >Activity Description: {activities.description}</h6>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Activities;
