import React from "react";
import TourCard from "../../Shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(featuredTours);

  return (
    <>
      {loading && <h4>Loading...........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours &&
        featuredTours.length > 0 &&
        featuredTours.map((tour) => (
          <Col lg="3" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
      {!loading && !error && featuredTours && featuredTours.length === 0 && (
        <h4 className="text-center">No featured tours found</h4>
      )}
    </>
  );
};

export default FeaturedTourList;
