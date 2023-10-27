import { makeAutoObservable } from "mobx";

export default class Store {
    user = {}

    lng = null
    lat = null

    constructor() {
        makeAutoObservable(this);
    }


    setLng(lng) {
        this.lng = lng;
    }

    setLat(lat) {
        this.lat = lat;
    }

}