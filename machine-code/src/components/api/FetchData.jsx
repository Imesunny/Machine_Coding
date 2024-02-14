import React, { useEffect, useState } from "react";
import { DisplayData } from "./DisplayData";

const FetchData = () => {
  let baseURL = `https://fakestoreapi.com/products`;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [filterBy, setFilterBy] = useState("default");

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
      return (
        ele.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        ele.category.toLowerCase().includes(e.target.value)
      );
    });
    setData(searchResult);
  };
  console.log(search);

  const handleCategory = (e) => {
    setFilterBy(e.target.value);
    if (e.target.value === "default") {
      setData(originalData);
    } else {
      const filteredProduct = originalData.filter((ele) => {
        return ele.category === e.target.value;
      });
      setData(filteredProduct);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(filterBy);
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

        <span>
          <label>Filter by Category🔎</label>
          <select value={filterBy} onChange={handleCategory}>
            <option value="default">--Select--</option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Womens Clothing</option>
          </select>
        </span>
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
