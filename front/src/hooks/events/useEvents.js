import { gapi } from "gapi-script";
import { useEffect, useState } from "react"

export const useEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const calendarID = import.meta.env.VITE_STRAPI_CALENDAR_ID;
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const accessToken = import.meta.env.VITE_BEARER_CALENDAR_TOKEN

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
            gapi.client
                .init({
                    apiKey: apiKey,
                })
                .then(function () {
                    return gapi.client.request({
                        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                    });
                })
                .then(
                    (response) => {
                        let events = response.result.items;
                        setEvents(events);
                    },
                    function (err) {
                        return [false, err];
                    }
                );
        }
        gapi.load("client", initiate);
    };

    useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
    }, []);

    return { events }
}