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
for (let i = 0; i <100; i++) {
  data.push({
    key: i,
    country: `Country`,
    confirmed: `468454`,
    deaths: `8584${i}`,
    recovered: `734826.`,
  });
}

class index extends Component {
  render() {
    return (
      <div className="container-table">
        <h5>Tổng số ca nhiễm của các nước</h5>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 320 }}
        />
      </div>
    );
  }
}
export default index;

// class index extends Component {

//   render() {
//     return (
//       <div className="container-table">
//         <h5>Tổng số ca nhiễm của các nước</h5>
//         {/* {countries &&
//           countries.map((countrys) => {
//             const { Slug, Country } = countrys;
//             return ( */}
//               <Table
//                 // key={Slug}
//                 // value={Slug}
//                 columns={columns}
//                 dataSource= {data}  //{Country}
//                 pagination={{ pageSize: 50 }}
//                 scroll={{ y: 320 }}
//               />

//           {/* })} */}
//       </div>
//        );
//   }
// }
// export default index;
