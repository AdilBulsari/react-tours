import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, fetchTours, removeTour }) => {
  // console.log(tourData);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.length > 0 ? (
          tours.map((tour) => {
            return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
          })
        ) : (
          <div className="title">
            <h2>No tours left ...</h2>
            <button className="btn" onClick={() => fetchTours()}>
              Refresh
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tours;
