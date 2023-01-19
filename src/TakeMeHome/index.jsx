import React from "react";
import { Link } from "react-router-dom";

const TakeMeHome = () => (
    <div>
        <Link to="/">
            <div className="bg-hot-red text-hot-red font-bold py-2 px-4 rounded bg-transparent border-none">
                Take Me Home
            </div>
        </Link>
    </div>
);

export default TakeMeHome;