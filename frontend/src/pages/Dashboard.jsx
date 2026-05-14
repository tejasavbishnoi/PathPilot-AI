import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [goal, setGoal] = useState("");

    const [roadmap, setRoadmap] = useState("");

    const [loading, setLoading] = useState(false);

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/");
    };

    const generateRoadmap = async () => {

        if (!goal) {
            alert("Please enter a career goal");
            return;
        }

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8080/api/ai/roadmap",
                goal,
                {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            setRoadmap(response.data);

        } catch (error) {

            console.log(error);

            alert("Failed to generate roadmap");

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-black text-white flex">

            {/* Sidebar */}

            <div className="w-[250px] bg-zinc-900 p-6 border-r border-zinc-800">

                <h1 className="text-3xl font-bold mb-10">
                    PathPilot AI
                </h1>

                <div className="space-y-4">

                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl text-left">
                        Dashboard
                    </button>

                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl text-left">
                        AI Roadmaps
                    </button>

                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl text-left">
                        Projects
                    </button>

                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl text-left">
                        Interview Prep
                    </button>

                </div>

            </div>

            {/* Main Content */}

            <div className="flex-1 p-10">

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h1 className="text-5xl font-bold mb-2">
                            Welcome Back 🚀
                        </h1>

                        <p className="text-gray-400">
                            Your AI-powered career dashboard
                        </p>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold"
                    >
                        Logout
                    </button>

                </div>

                {/* AI Roadmap Generator */}

                <div className="bg-zinc-900 p-6 rounded-2xl mb-10">

                    <h2 className="text-3xl font-bold mb-5">
                        AI Career Roadmap Generator
                    </h2>

                    <input
                        type="text"
                        placeholder="Example: Become a Java Backend Developer"
                        className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none mb-5"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />

                    <button
                        onClick={generateRoadmap}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
                    >
                        {loading ? "Generating..." : "Generate Roadmap"}
                    </button>

                </div>

                {/* AI Response */}

                {roadmap && (

                    <div className="bg-zinc-900 p-6 rounded-2xl whitespace-pre-wrap">

                        <h2 className="text-3xl font-bold mb-5">
                            Your AI Roadmap
                        </h2>

                        <p className="text-green-400 leading-8">
                            {roadmap}
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Dashboard;