import Calendar from "@ericz1803/react-google-calendar";

export const GoogleCalendar = () => {
    const apiKey = "AIzaSyBjtnS5ugDxPlWGvhuqnwOZXkWuVguoF6A"

    let calendars = [
        { calendarId: "mkx.dake@gmail.com" },

    ];

    return (
        <div>
            <Calendar apiKey={apiKey} calendars={calendars} />
        </div>
    )
}