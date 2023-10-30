import { makeAutoObservable } from "mobx";

export default class Store {
    user = {}

    lng = null
    lat = null
    mode = 0

    constructor() {
        makeAutoObservable(this);
    }


    setLng(lng) {
        this.lng = lng;
    }

    setLat(lat) {
        this.lat = lat;
    }

    setMode(mode){
        this.mode = mode
    }

}