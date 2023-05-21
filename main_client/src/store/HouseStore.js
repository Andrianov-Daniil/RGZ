import {makeAutoObservable} from "mobx";

export default class HouseStore {
    constructor() {
        this._types = [];
        this._houses = [];
        this._selectedType = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 4;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setHouses(houses) {
        this._houses = houses;
    }

    setSelectedType(types) {
        this.setPage(1);
        this._selectedType = types;
    }

    setPage(page) {
        this._page = page;
    }
    setTotalCount(count) {
        this._totalCount = count;
    }

    get types() {
        return this._types;
    }
    get houses() {
        return this._houses;
    }
    
    get selectedType() {
        return this._selectedType;
    }
    get totalCount() {
        return this._totalCount;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
}