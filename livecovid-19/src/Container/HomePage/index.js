import React, { useState, useEffect } from "react";
import NavBar from "../../Layouts/Header";
import TableView from "../../Components/TableView";
import { Select } from "antd";
import { Box } from "../../Components/Box";
import SelecCountry from "../../Components/SelecCountry";

import API from "../../Services/API";

const { Option } = Select;

const HomePage = () => {
  const [countrySelectedId, setCountrySelectedId] = useState("vietnam");
  const [countries, setCountries] = useState([]);
  const [conuntryData, setCountryData] = useState([]); //linechart
  const [sumaryData, setSumaryData] = useState([]);
  const [mapData, setMapData] = useState({}); //map
  // const [isLoading, setIsLoading] = useState(false);   //loading

  useEffect(() => {
    const getAllCountries = async () => {
      const countriesData = await API.fetchAllCoutries();
      setCountries(countriesData.data);
      console.log(countriesData);
    };
    getAllCountries();
  }, []);
  useEffect(() => {
    const getMapData = async () => {
      if (countrySelectedId && countries.length !== 0) {
        const selectedCountry = countries.find(
          (country) => country.Slug === countrySelectedId
        );
        const countryId = selectedCountry.ISO2.toLowerCase();
        const mapDataJSON = await import(
          `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
        );
        setMapData(mapDataJSON);
      }
      return {};
    };
    const getCountryData = async () => {
      try {
        const response = await API.fetchCountryData(countrySelectedId);

        setCountryData(response.data);
        setSumaryData(summaryData(response.data));
        getMapData();
      } catch (error) {
        console.log(error);
      }
    };
    console.log(setCountrySelectedId);
    getCountryData();
  }, [countrySelectedId, countries]);

  const handleSelectedCountry = (countryId) => {
    setCountrySelectedId(countryId);
  };
  console.log(setCountrySelectedId);

  const summaryData = (data) => {
    if (data && data.length) {
      const latestData = data[data.length - 1];

      return [
        {
          title: "Total cases",
          count: latestData.Confirmed,
          type: "confirmed",
        },
        {
          title: "Recovered cases",
          count: latestData.Recovered,
          type: "recovered",
        },
        {
          title: "Death cases",
          count: latestData.Deaths,
          type: "death",
        },
      ];
    }
    return [];
  };
  console.log(summaryData);

  return (
    <div>
      <NavBar />
      <div className="select-item">
        <SelecCountry
          countries={countries}
          handleSelectedCountry={handleSelectedCountry}
        />
      </div>
      <div className="box-wrapper">
        {sumaryData &&
          sumaryData.map((sumaryInfo) => {
            const { type, count, title } = sumaryInfo;
            return <Box count={count} title={title} type={type} />;
          })}
      </div>

      <TableView />
    </div>
  );
};

export default HomePage;
