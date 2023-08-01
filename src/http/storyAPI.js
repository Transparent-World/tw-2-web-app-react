import {$host} from './index';

export const fetchStories = async () => {
    const {data} = await $host.get('api/story/get')
    return data
}