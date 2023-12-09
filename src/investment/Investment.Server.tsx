import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Input, Button } from "@chakra-ui/react";
import { Tables } from "database.types";
import { createInvestment, getInvestments } from "services/investment_service";

export const Investment = () => {
  const { journeyId } = useParams();
  const [investmentTxt, setInvestmentTxt] = useState("");
  const [investments, setInvestments] = useState<Tables<"Investment">[]>([]);

  useEffect(() => {
    getInvestments().then(({ data }) => {
      setInvestments(data as Tables<"Investment">[]);
    });
  }, []);

  const [investmentDescription, setInvestmentDescription] = useState("");

  const handleInvestmentTxt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentTxt(event.target.value);
  };

  const handleInvestmentDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvestmentDescription(event.target.value);
  };

  const handleAddInvestment = () => {
    createInvestment({
      data: {
        title: investmentTxt,
        content: investmentDescription,
        journey_id: journeyId,
      },
    });
  };

  return (
    <div>
      {investments.map((investment) => (
        <div key={investment.id}>
          <h1>{investment.title}</h1>
          <p>{investment.content}</p>
        </div>
      ))}
      <div>
        <Input value={investmentTxt} onChange={handleInvestmentTxt} />
        <Input
          value={investmentDescription}
          onChange={handleInvestmentDescription}
        />

        <Button colorScheme="blue" onClick={handleAddInvestment}>
          Add
        </Button>
      </div>
    </div>
  );
};
