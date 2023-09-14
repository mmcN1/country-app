import React, { useState, useEffect, useMemo } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import { request } from "graphql-request";
import "../styles/page.scss";
import countriesDocument from "../documents";

const Page = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, data]);

  useEffect(() => {
    request(
      "https://countries.trevorblades.com/graphql",
      countriesDocument
    ).then((res) => setData(res.countries));
  }, []);

  return (
    <div className="page">
      <Navbar searchValue={searchValue} onChangeSearchValue={setSearchValue} />
      <Content data={filteredData} />
    </div>
  );
};

export default Page;
