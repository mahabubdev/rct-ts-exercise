import React, {useState, useEffect} from "react";

const App: React.FC = () => {
    var clockTime: String = new Date().toLocaleString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // clock
    const [clock, setClock] = useState<String>("");

    useEffect(() => {
        setClock(new Date().toLocaleString("en-US", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }));
    })

    return <div className="wrap">
        <p>{clock}</p>
    </div>
}

export default App;