function UserCard({user,addUser}){

    return(

        <div className="col-md-3">

            <div className="card p-3 text-center">

                <h5>{user.name}</h5>

                <p>{user.email}</p>

                <button 
                className="btn btn-primary"
                onClick={addUser}
                >
                    Add User
                </button>

            </div>

        </div>

    )
}

export default UserCard;