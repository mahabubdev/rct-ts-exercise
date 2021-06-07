import { FC } from "react";
import { observer } from "mobx-react-lite";

type Count = {
    count: number;
    increase: () => void;
    decrease: () => void;
}

const App: FC = observer(({ count: Count }) => {
    return <div className="wrap">
        <p>Clicks: {count.count}</p>
        <div className="btn_area">
            <button className="btn" onClick={() => count.increase()}>increment</button>
            <button className="btn" onClick={() => count.decrease()}>decrement</button>
        </div>
    </div>
});

export default App;