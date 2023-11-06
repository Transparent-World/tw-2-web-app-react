import { makeAutoObservable } from "mobx";

export default class OrderStore {
    constructor(){
        this._orders = [
            {
                "id": 2,
                "userid": "736466798",
                "lon": "38.170",
                "lat": "46.051",
                "address": " г Приморско-АхтарскПриморско-Ахтарск, Краснодарский край",
                "radius": 1000
            },
            {
                "id": 3,
                "userid": "736466798",
                "lon": "37.7302566",
                "lat": "55.8984019",
                "address": "",
                "radius": 1000
            },
            {
                "id": 4,
                "userid": "736466798",
                "lon": "37.7302566",
                "lat": "55.8984019",
                "address": "",
                "radius": 1000
            },
            {
                "id": 5,
                "userid": "736466798",
                "lon": "37.7302566",
                "lat": "55.8984019",
                "address": "12132",
                "radius": 1000
            }
        ]
        this.images = ['test']
        makeAutoObservable(this)
    }


    setOrders(orders) {
        this._orders = orders
    }

    setImages(images) {
        this.images = images
    }

    get orders() {
        return this._orders
    }
}