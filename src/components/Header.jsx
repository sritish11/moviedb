import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";

function Header() {

  let movieName = useRef();

  let navigate = useNavigate();
  function searchInfo(){
    // console.log(movieName);
    // console.log(movieName.current.value);
    if(movieName.current.value != ""){
      navigate("/search-movie/" + movieName.current.value);
    }
  }


  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-400">MovieDB</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/top-rated" className="text-gray-700 hover:text-blue-600">Top Rated Movies</Link>
          <Link to="/upcoming" className="text-gray-700 hover:text-blue-600">Upcoming Movies</Link>
          {/* <Link to="/c1" className="text-gray-700 hover:text-blue-600">Props Drill</Link> */}
          {/* <Link to="/c10" className="text-gray-700 hover:text-blue-600">Task</Link> */}

          <Link className="text-gray-700">
            <input type="text" ref={movieName}placeholder="Search Movies.." className="border p-1 rounded-md"/ > &nbsp;
            <button onClick={searchInfo} className="bg-gray-400 p-1 rounded-md">Search</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
