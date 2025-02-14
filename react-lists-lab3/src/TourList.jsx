// src/TourList.jsx
import Tour from "./Tour";

const TourList = (props) => {
  const { tours } = props;
  return (
    <section>
      <div className="title">
        <h2>our tours12</h2>
        <div className="underline"></div>
      </div>
      <div>
      {tours.length > 0 ? (
          tours.map((tour) => (
            <Tour key={tour.id} tour={tour} removeTour={removeTour} />
          ))
        ) : (
          <h3>No Tours Left</h3>
        )}
      </div>
    </section>
  );
};

export default TourList;