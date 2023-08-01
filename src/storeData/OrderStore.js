import { makeAutoObservable } from "mobx";

export default class OrderStore {
    constructor(){
        this._orders [
            {
                id: 1,
                userid: '736466798',
                lon: '23.45',
                lat: '23.45',
                address: 'Мытищи 1',
                radius: '200',
                status: 0,
            },
            {
                id: 2,
                userid: '736466798',
                lon: '23.45',
                lat: '23.45',
                address: 'Мытищи 2 ',
                radius: '200',
                status: 0,
            },
            {
                id: 3,
                userid: '736466798',
                lon: '23.45',
                lat: '23.45',
                address: 'Мытищи 3 ',
                radius: '200',
                status: 0,
            }
        ]
        makeAutoObservable(this)
    }


    setStories(orders) {
        this._orders = orders
    }

    get stories() {
        return this._orders
    }
}