import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StickyHeader = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${isSticky ? "sticky top-0 bg-white shadow-md" : ""
                } p-4 transition-all duration-300 shadow-md`}
        >
            {/* Header content */}
            <nav className="flex items-center justify-between ">
                <div>
                    <img
                        src="https://www.projectbroadcast.com/m/wp-content/uploads/2022/08/project-broadcast.png"
                        alt="Logo"
                        className="h-8"
                    />
                </div>
                <ul className="flex space-x-4">
        
                    <Link className="font-semibold rounded-md bg-gray-100 px-10 py-1 hover:bg-blue-600 hover:text-white rounde-sm" to="/login">
                        Logout
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default StickyHeader;
