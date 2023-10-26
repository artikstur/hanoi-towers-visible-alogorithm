import {makeAutoObservable} from "mobx";

class HanoiSolverStore {
    private _countOfRings: number = 0;
    constructor() {
        makeAutoObservable(this)
    }

    get countOfRings() {
        return this._countOfRings
    }

    setCountOfRings(value: number) {
        this._countOfRings = value;
    }

}

export default new HanoiSolverStore();