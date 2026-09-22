export default function EventCard({
  event,
}: {
  event: {
    date: string;
    artist: string;
    venue: string;
    city: string;
    country: string;
    ticketUrl: string;
  };
}) {
  return (
    <article className="event-card">
      <div>
        <div className="section-label">
          {new Date(event.date).toLocaleDateString("en", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </div>

        <h2>{event.artist}</h2>
      </div>

      <div>
        <strong>{event.venue}</strong>
        <p>
          {event.city}, {event.country}
        </p>
      </div>

      <a className="button" href={event.ticketUrl}>
        Tickets
      </a>
    </article>
  );
}