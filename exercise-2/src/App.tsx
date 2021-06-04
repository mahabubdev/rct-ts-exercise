import React, { useState, FC } from "react";

const App: FC = () => {
    // clicks
    const [click, setClick] = useState(0);

    return <div className="wrap">
        <p>Clicks: {click}</p>
        <div className="btn_area">
            <button className="btn" onClick={() => setClick(click + 1)}>increment</button>
            <button className="btn" onClick={() => setClick(click - 1)}>decrement</button>
        </div>
    </div>
}

export default App;