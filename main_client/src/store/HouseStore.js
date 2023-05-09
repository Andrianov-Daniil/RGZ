import {makeAutoObservable} from "mobx";

export default class HouseStore {
    constructor() {
        this._types = [
            {id: 1, name: "Однокомнатная"},
            {id: 2, name: "Однокомнатная студия"},
            {id: 3, name: "Двухкомнатная"}
        ];
        this._houses = [
            {id: 1, price: "1000", typeId: "1", userId: "1", img:'https://img.freepik.com/free-vector/a-sticker-template-with-mini-house-isolated_1308-60687.jpg'},
            {id: 2, price: "1000", typeId: "1", userId: "1", img:'https://img.freepik.com/free-vector/a-sticker-template-with-mini-house-isolated_1308-60687.jpg'},
            {id: 3, price: "1000", typeId: "1", userId: "1", img:'https://img.freepik.com/free-vector/a-sticker-template-with-mini-house-isolated_1308-60687.jpg'},
            {id: 5, price: "1000", typeId: "1", userId: "1", img:'https://img.freepik.com/free-vector/a-sticker-template-with-mini-house-isolated_1308-60687.jpg'},
            {id: 4, price: "1000", typeId: "1", userId: "1", img:'https://img.freepik.com/free-vector/a-sticker-template-with-mini-house-isolated_1308-60687.jpg'}
        ];
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