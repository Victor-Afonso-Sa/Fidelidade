// @flow
import * as React from "react";

import { Header } from "../../components/Header";
import { Extrato } from "../../components/Extrato";
import { Wallet } from "../../components/Wallet";
import ReactEcharts from "echarts-for-react";
import * as AlertService from "../../components/Alert";

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
      <div className="row mt-4 p-0 w-100 d-flex justify-content-center">
        <div className="col-12 col-md-8 ">
          <div>
            <ReactEcharts option={chartOptions} />
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              AlertService.presentAlert();
            }}
          >
            Open Alert
          </button>
        </div>
        <div className="col-12 col-md-4 ">
          <Wallet />
          <Extrato />
        </div>
      </div>
    </>
  );
};
