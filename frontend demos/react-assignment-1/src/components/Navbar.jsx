function Navbar()
{
    return(
        <div  className="flex justify-between bg-gray-500 py-5 text-white">
            <h1 className="text-3xl mx-4 font-bold">
                LOGO
            </h1>
            <ul className="flex text-2xl font-bold gap-10 mx-4">
                <li>
                    <a href="#">Home</a>
                </li>
                 <li>
                    <a href="#">Register</a>
                </li>
                 <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;