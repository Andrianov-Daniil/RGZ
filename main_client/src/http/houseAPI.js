import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const deleteType = async (type) => {
    const {data} = await $authHost.delete('api/type', type);
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

export const fetchHouses = async (typeId, page, limit) => {
    const {data} = await $authHost.get('api/house', {params: {
        typeId, page, limit
    }});
    return data;
}

export const fetchOneHouse = async (id) => {
    const {data} = await $authHost.get('api/house/' + id);
    return data;
}