import React from "react";
import QuoteList from "../components/quotes/QuoteList";
import Card from "../components/UI/Card";
import { useSelector } from "react-redux";

export default function AllQuotes() {
  const quotes = useSelector((state) => state.quotes.quotes);

  return (
    <Card>
      <QuoteList quotes={quotes}></QuoteList>
    </Card>
  );
}
