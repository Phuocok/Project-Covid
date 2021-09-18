import React, { Component } from "react";
import { Table } from "antd";

import "./Table.css";
const columns = [
  {
    title: "Country",
    dataIndex: "country",
    width: 100,
  },
  {
    title: "Confirmed",
    dataIndex: "confirmed",
    width: 100,
  },
  {
    title: "Deaths",
    dataIndex: "deaths",
    width: 100,
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    width: 100,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    country: `Country ${i}`,
    confirmed: `4668454`,
    deaths: `85684${i}`,
    recovered: `7348526.`,
  });
}   
class index extends Component {
  render() {
    return (
      <div>
        <h5>Tổng số ca nhiễm của các nước</h5>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </div>
    );
  }
}

export default index;
