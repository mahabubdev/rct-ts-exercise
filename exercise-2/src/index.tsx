import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { makeAutoObservable } from "mobx";
// import { observer } from "mobx-react-lite";

class State {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase() {
        this.count += 1;
    }

    decrease() {
        this.count -= 1;
    }
}

const AppState = new State();


ReactDOM.render(<App count={AppState} />, document.getElementById("e2"));