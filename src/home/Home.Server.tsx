import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getJourneys } from "services/journey_service";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getJourneys().then(({ data }) => {
      console.log(data);
      if (data && data?.length !== 0) {
        navigate(`/investment/${data[0].id}`);
      } else {
        console.log(2);
        navigate("/journey");
      }
    });
  }, [navigate]);

  return <div></div>;
};
