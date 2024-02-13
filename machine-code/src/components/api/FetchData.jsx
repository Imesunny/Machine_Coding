import React, { useEffect, useState } from "react";
import { DisplayData } from "./DisplayData";

const FetchData = () => {
  let baseURL = `https://fakestoreapi.com/products`;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseURL}`);
      const dataFromApi = await response.json(response);
      setData(dataFromApi);
      setOriginalData(dataFromApi);
    } catch (error) {
      console.log("error while fetching data", error);
    }
  };

  const handleSearchInput = (e) => {
    
    setSearch(e.target.value);
    const searchResult = originalData.filter((ele) => {
      return ele.title.toLowerCase().includes(e.target.value.toLowerCase()) || ele.category.toLowerCase().includes(e.target.value);
    });
    setData(searchResult);
  };
  console.log(search);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <h2>FetchData</h2>
      <div className="search">
        <label>🔎</label>
        <input
          type="text"
          placeholder="Search your items..."
          value={search}
          onChange={handleSearchInput}
        />
       
      </div>
      <div className="product-grid">
        {data?.map((ele) => {
          return <DisplayData ele={ele} key={ele.id} />;
        })}
      </div>
    </>
  );
};

export default FetchData;
