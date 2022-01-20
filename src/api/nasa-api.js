import { credentials } from './secret'
import {pageToDate} from "../util/converters";

export async function retrieveApodPosts(page) {
    const dateRange = pageToDate(page);
    console.log(dateRange.start);
    console.log(dateRange.end);
    const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${credentials.apiKey}&start_date=${dateRange.start}&end_date=${dateRange.end}`;
    return (await (await fetch(apodUrl)).json()).map((post) => {
        return {
            imageUrl: post['url'],
            description: post['explanation'],
            title: post['title'],
            date: post['date']
        }
    });
}