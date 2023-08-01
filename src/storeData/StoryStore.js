import { makeAutoObservable } from "mobx";

export default class StoryStore {
    constructor(){
        this._stories [
            {
                id: 1,
                img: 'https://poizonshop-webapp.vercel.app/_next/static/media/refer-friend.511a6d1e.png?w=256&q=75',
                link: 'https://t.me/twrussia/403'
            },
            {
                id: 2,
                img: 'https://poizonshop-webapp.vercel.app/_next/static/media/refer-friend.511a6d1e.png?w=256&q=75',
                link: 'https://t.me/twrussia/402'
            },
            {
                id: 3,
                img: 'https://poizonshop-webapp.vercel.app/_next/static/media/refer-friend.511a6d1e.png?w=256&q=75',
                link: 'https://t.me/twrussia/401'
            }
        ]
        makeAutoObservable(this)
    }


    setStories(stories) {
        this._stories = stories
    }

    get stories() {
        return this._stories
    }
}