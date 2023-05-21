import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $authHost.get('api/type');
    return data;
}

export const createHouse = async (house) => {
    const {data} = await $authHost.post('api/house', house);
    return data;
}

export const fetchHouses = async () => {
    const {data} = await $authHost.get('api/house');
    return data;
}

export const fetchOneHouse = async (id) => {
    const {data} = await $authHost.get('api/house/' + id);
    return data;
}