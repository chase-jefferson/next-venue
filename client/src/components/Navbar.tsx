<<<<<<< HEAD
import { useState } from "react";
import Button from "./Button";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
=======
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Button from "./Button";
import { FaUserCircle } from "react-icons/fa";
import { getWeather } from "../api/WeatherAPI";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("token") ? true : false;
  });
    const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    getWeather();
  }, []);
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

  return (
    <nav className="bg-amber-700 p-4 flex justify-between items-center shadow-md">
      <a
        href="/"
        className="text-white text-2xl font-family: 'Poppins', sans-serif italic"
      >
        Next Venue
      </a>
      <div className="flex gap-4">
        {isLoggedIn ? (
<<<<<<< HEAD
          <Button className="flex items-center gap-2 bg-orange-500 text-blue-600 hover:bg-gray-100">
            <FaUserCircle size={20} /> Profile
          </Button>
        ) : (
          <>
            <Button
              className="bg-amber-300 text-slate-600 hover:bg-amber-800"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
            <Button className="bg-amber-400 text-white hover:bg-yellow-800">
              Register
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};
=======
          <Button
            className="flex items-center gap-2 bg-orange-500 text-blue-600 hover:bg-gray-100"
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/profile");
            }} // ✅ Navigate to Profile
          >
            <FaUserCircle size={20} /> Profile
          </Button>
        ) : (
            <div>
              <Button
                className="bg-amber-300 text-slate-600 hover:bg-amber-800"
                onClick={() => {
                  setIsLoggedIn(true);
                  navigate("/login");
                }} // ✅ Navigate to Login
              >
                Login
              </Button>
              <Button
                className="bg-amber-400 text-white hover:bg-yellow-800"
                onClick={() => navigate("/register")} // ✅ Navigate to Register
              >
                Register
              </Button>
            </div>
          )}
      </div>
    </nav>
  )};
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

export default Navbar;
