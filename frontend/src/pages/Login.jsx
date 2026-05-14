import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://pathpilot-ai-backend.onrender.com/api/auth/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem("token", response.data);

            alert("Login Successful!");

            console.log(response.data);

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Login Failed");
        }
    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center">

            <div className="bg-zinc-900 p-10 rounded-2xl w-[400px] shadow-2xl">

                <h1 className="text-white text-4xl font-bold mb-8 text-center">
                    PathPilot AI
                </h1>

                <form onSubmit={handleLogin} className="space-y-5">

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white p-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>

                    <p className="text-gray-400 text-center">

                        Don't have an account?{" "}

                        <Link
                            to="/signup"
                            className="text-blue-500 hover:underline"
                        >
                            Signup
                        </Link>

                    </p>

                </form>

            </div>

        </div>
    );
}

export default Login;