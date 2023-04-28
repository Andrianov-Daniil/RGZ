import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'},
            {id: 3, name: 'Мультиварка'},
            {id: 4, name: 'Ноутбуки'}
        ]
        this._brands = [
            {id: 1, name: 'Самсунг'},
            {id: 2, name: 'Айфон'},
            {id: 3, name: 'Айфон'},
            {id: 4, name: 'Айфон'},
            {id: 5, name: 'Айфон'},
            
            
        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 10000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
            {id: 2, name: '13 pro', price: 120000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
            {id: 3, name: '14 pro', price: 1230000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
            {id: 4, name: '14 pro', price: 1230000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
            {id: 5, name: '14 pro', price: 1230000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
            {id: 6, name: '15 pro', price: 110000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
            {id: 6, name: '15 pro', price: 110000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NepTStjipxyh_gm9vhvJpdmvi4QxaxaTIx4S7jWR9A&s'},
        ]
        this._selectedType = {};
        this._selectedBrand = {};
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
    setSelectedType(type){
        this._selectedType = type;
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand;
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
    get selectedType(){
        return this._selectedType;
    }
    get selectedBrand(){
        return this._selectedBrand;
    }
}