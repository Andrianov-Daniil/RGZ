import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'},
        ]
        this._brands = [
            {id: 1, name: 'Самсунг'},
            {id: 2, name: 'Айфон'},
        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 10000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alfaplan.ru%2F&psig=AOvVaw3GQBp2UrHChtXoaX6iZbQy&ust=1682323950574000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiIiJ7Hv_4CFQAAAAAdAAAAABAE'},
            {id: 2, name: '13 pro', price: 120000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alfaplan.ru%2F&psig=AOvVaw3GQBp2UrHChtXoaX6iZbQy&ust=1682323950574000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiIiJ7Hv_4CFQAAAAAdAAAAABAE'},
            {id: 3, name: '14 pro', price: 1230000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alfaplan.ru%2F&psig=AOvVaw3GQBp2UrHChtXoaX6iZbQy&ust=1682323950574000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiIiJ7Hv_4CFQAAAAAdAAAAABAE'},
        ]
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }
    setUser(brands){
        this._brands = brands;
    }
    setDevices(devices){
        this._devices = devices;
    }

    get types(){
        return this._types;
    }
    get brands(){
        return this._brands;
    }
    get devices(){
        return this._devices;
    }
}