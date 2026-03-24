function Users(props){
    let {users}=props;
    return( 
    <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-500">
        <h2 >{users.name}</h2>
        <p>{users.email}</p>
        <img src={users.image} alt="" className=" block mx-auto rounded-3xl"></img>
    </div>
    );
}
export default Users;