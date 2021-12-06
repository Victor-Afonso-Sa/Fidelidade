// @flow
import * as React from "react";

import { Header } from "../../components/Header";
import { Extrato } from "../../components/Extrato";
import { Wallet } from "../../components/Wallet";
import ReactEcharts from "echarts-for-react";

export const Home = () => {
  let chartOptions = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  return (
    <>
      <Header name="'Nome e sobrenome'" />
      <div className="row mt-4">
        <div className="col-12 col-md-8 ">
        <ReactEcharts option={chartOptions} />
        </div>
        <div className="col-12 col-md-4">
          <Wallet />
          <Extrato />
        </div>
      </div>
    </>
  );
};
