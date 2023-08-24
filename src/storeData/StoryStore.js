import { makeAutoObservable } from "mobx";

export default class StoryStore {
    constructor(){
        this._stories =[]
        makeAutoObservable(this)
    }


    setStories(stories) {
        this._stories = stories
    }

    get stories() {
        return this._stories
    }
}