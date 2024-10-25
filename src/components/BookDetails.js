import React, { useContext, useEffect } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const bookId = useParams();

  useEffect(() => {
    console.log(bookId);
  });

  return <></>;
}
