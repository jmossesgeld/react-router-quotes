import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useSelector, useDispatch } from "react-redux";
import { quotesActions } from "../store/quotes";
import { Redirect } from "react-router";

export default function AllQuotes() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.quotes.isLoading);
  let isRedirect = false;

  const onAddQuote = (quote) => {
    isRedirect = true;
    dispatch(quotesActions.addQuote(quote));
  };

  return (
    <>
      <QuoteForm isLoading={isLoading} onAddQuote={onAddQuote}></QuoteForm>
      {isRedirect && <Redirect to="/quotes" />}
    </>
  );
}
