import React, { useState, useEffect } from "react";
import NavBar from "../../Layouts/Header";
import TableView from "../../Components/TableView";
import { Select } from "antd";

import API from "../../Services/API";

const { Option } = Select;
function handleChange(value) {
  console.log(value);
}
const HomePage = () => {
  const [countrySelectedId, setCountrySelectedId] = useState("vietnam");
  const [countries, setCountries] = useState([]);
  const [conuntryData, setCountryData] = useState([]);
  const [sumaryData, setSumaryData] = useState([]);
  const [mapData, setMapData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      <div className="select-country">
        {/* <TableView /> */}

        <div className="select-item">
          <Select
            placeholder="Select a countries"
            labelInValue
            optionFilterProp="children"
            defaultValue={{ value: "Viet Nam" }}
            style={{ width: 120 }}
            onChange={(value) => handleSelectedCountry(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countries &&
              countries.map((country) => {
                const { Slug, Country } = country;
                return (
                  <Option value={Slug} key={Slug}>
                    {Country}
                  </Option>
                );
              })}
          </Select>
        </div>
      </div>
      <div className="box-wrapper">
        {sumaryData &&
          sumaryData.map((sumaryInfo) => {
            const { count } = sumaryInfo;
            return (
              <div className="row">
                <div className="col">
                  <p className="red">{count}</p>
                </div>
                
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
