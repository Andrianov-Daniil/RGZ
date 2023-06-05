import {makeAutoObservable} from "mobx";

export default class HouseStore {
    constructor() {
        this._types = [];
        this._houses = [];
        this._selectedType = [];
        this._citys = [];
        this._selectedCity = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setCitys(citys) {
        this._city = citys;
    }
    setHouses(houses) {
        this._houses = houses;
    }
    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }
    setSelectedCity(city) {
        this.setPage(1);
        this._selectedCity = city;
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
    get citys() {
        return this._citys;
    }
    get houses() {
        return this._houses;
    }
    
    get selectedType() {
        return this._selectedType;
    }
    get selectedCity() {
        return this._selectedCity;
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