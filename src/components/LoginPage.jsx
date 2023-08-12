import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/api";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar";


export default function LoginPage() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showProgressBar, setShowProgressBar] = useState(false); // New state
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleEmailChange = (event) => {
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const showSuccessToast = (message) => {
        toast.current.show({
            severity: "success",
            summary: "Success",
            detail: message,
            life: 3000,
        });
    };

    const showErrorToast = (message) => {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: message,
            life: 5000,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate userName and password
        if (!user || !password) {
            setError("Please fill in both userName and password.");
            return;
        }

        // Start loading and show progress bar
        setLoading(true);
        setShowProgressBar(true);
        setError("")
        try {
            const response = await signIn({ username: user, password });
            // Extract the token from the response
            const token = response.token
            console.log(token)
            window.localStorage.setItem("authToken", token);
            showSuccessToast("Login successful!");
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch (error) {
            // Handle login error
            setError("Login failed. Please check your credentials.");
            showErrorToast("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
            setShowProgressBar(false);
        }
    };

    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8 bg-gray-100 ">
                <Toast ref={toast} />
                <div className="border-2 border-gray-300 py-10 w-2/3 bg-white rounded-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                        <img
                            className="mx-auto h-14 w-auto"
                            src="https://www.projectbroadcast.com/m/wp-content/uploads/2022/08/project-broadcast.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-5 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                            Credit Card Luhn Validation
                        </h2>
                    </div>

                    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="userName"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    User Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleEmailChange}
                                        id="userName"
                                        name="userName"
                                        type="userName"
                                        autoComplete="userName"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        onChange={handlePasswordChange}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {loading ? (
                                        <>
                                            <span>Signing in...</span>
                                            {showProgressBar && (
                                                <ProgressBar
                                                    mode="indeterminate"
                                                    style={{ height: "8px", marginLeft: "10px" }}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        "Sign in"
                                    )}
                                </button>
                                <button
                                    onClick={() => navigate("/sign-up")}
                                    className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 border-2 shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="mt-2 text-center text-sm text-red-600">{error}</p>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Developed by GuruF
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
