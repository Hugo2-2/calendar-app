

export const CalendarEvent = ({ event }) => {
  
    const { title, start, end, user } = event;

    return (
        <>
            <strong>{ title }</strong>
            <strong> - { user.name }</strong>
        </>
    )
}
