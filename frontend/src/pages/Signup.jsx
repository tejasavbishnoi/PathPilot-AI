import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://pathpilot-ai-backend.onrender.com/api/auth/signup",
                {
                    name,
                    email,
                    password,
                }
            );

            alert("Signup Successful!");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Signup Failed");
        }
    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center">

            <div className="bg-zinc-900 p-10 rounded-2xl w-[400px] shadow-2xl">

                <h1 className="text-white text-4xl font-bold mb-8 text-center">
                    Create Account
                </h1>

                <form onSubmit={handleSignup} className="space-y-5">

                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        className="w-full bg-green-600 hover:bg-green-700 transition-all text-white p-3 rounded-lg font-semibold"
                    >
                        Signup
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Signup;