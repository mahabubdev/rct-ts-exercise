import { FC } from "react";
import { observer } from "mobx-react-lite";


const App: FC = observer(({ count }) => {
    return <div className="wrap">
        <p>Clicks: {count.count}</p>
        <div className="btn_area">
            <button className="btn" onClick={() => count.increase()}>increment</button>
            <button className="btn" onClick={() => count.decrease()}>decrement</button>
        </div>
    </div>
});

export default App;