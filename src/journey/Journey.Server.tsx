import React from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "@chakra-ui/react";
import { createJourney } from "services/journey_service";

export const Journey = () => {
  const navigate = useNavigate();

  const [journeyTxt, setJourneyTxt] = React.useState("");

  const handleJourneyTxt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJourneyTxt(event.target.value);
  };

  const handleCreateJourney = () => {
    createJourney({ data: { title: journeyTxt } }).then(({ data }) => {
      setJourneyTxt("");
      navigate(`/investment/${data?.id}`);
    });
  };

  return (
    <div>
      <Input value={journeyTxt} onChange={handleJourneyTxt} />

      <Button colorScheme="blue" onClick={handleCreateJourney}>
        Add
      </Button>
    </div>
  );
};
