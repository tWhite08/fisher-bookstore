import React, { useEffect, useState } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default function Books(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/books/")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={data} />
            </div>
        </div>
    );
}
