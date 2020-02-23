import request from '../utils/request';

export const getInputItemData = () => {
    return request({
        method: 'get',
        url: 'http://localhost:3000/inputItem',
    })
}

export const searchInputItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/inputItem/search',
        data: query,
    })
}

export const delInputItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/inputItem/del',
        data: query,
    })
}

export const addInputItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/inputItem/add',
        data: query,
    })
}

export const updateInputItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/inputItem/update',
        data: query,
    })
}


export const getCurrentItemData = () => {
    return request({
        method: 'get',
        url: 'http://localhost:3000/currentItem',
    })
}

export const searchCurrentItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/currentItem/search',
        data: query,
    })
}

export const delCurrentItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/currentItem/del',
        data: query,
    })
}

export const addCurrentItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/currentItem/add',
        data: query,
    })
}

export const updateCurrentItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/currentItem/update',
        data: query,
    })
}

export const getSaleItemData = () => {
    return request({
        method: 'get',
        url: 'http://localhost:3000/saleItem',
    })
}

export const searchSaleItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/saleItem/search',
        data: query,
    })
}

export const delSaleItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/saleItem/del',
        data: query,
    })
}

export const addSaleItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/saleItem/add',
        data: query,
    })
}

export const updateSaleItemData = (query) => {
    return request({
        method: 'post',
        url: 'http://localhost:3000/saleItem/update',
        data: query,
    })
}