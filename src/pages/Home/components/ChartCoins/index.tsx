import { useState } from "react";
import Chart from "../../../../components/Chart";
import { Button } from "../../../../styles/global";

import { ChartContainer } from "./styles";

function ChartCoins() {
  const coinValues: number[] = [];
  for (let idx = 0; idx < 30; idx++) {
    coinValues.push(Math.floor(Math.random() * 200));
  }

  const currencyValues: number[] = [];
  for (let idx = 0; idx < 30; idx++) {
    currencyValues.push(Math.floor(Math.random() * 200));
  }

  const [chartButtons, setChartButtons] = useState([
    {
      label: "Ultimos 7 dias",
      selected: false,
    },
    {
      label: "Ultimos 15 dias",
      selected: true,
    },
    {
      label: "Ultimos 30 dias",
      selected: false,
    },
  ]);

  const [xChartValues, setxChartValues] = useState(
    createArrayOfDatesWithGivenNumber(15),
  );

  function chartAction(index: number) {
    switch (index) {
      case 0:
        setxChartValues(createArrayOfDatesWithGivenNumber(7));
        break;
      case 1:
        setxChartValues(createArrayOfDatesWithGivenNumber(15));
        break;
      case 2:
        setxChartValues(createArrayOfDatesWithGivenNumber(30));
        break;
    }
  }

  function createArrayOfDatesWithGivenNumber(numberOfDays: number): string[] {
    const datesList: string[] = [];
    for (let idx = 0; idx < numberOfDays; idx++) {
      const date = new Date();
      date.setDate(date.getDate() - idx);
      datesList.unshift(date.toDateString());
    }
    return datesList;
  }
  return (
    <ChartContainer className="mb-3">
      <div className="d-flex justify-content-end p-3">
        {chartButtons.map((btnInfo, index) => {
          return (
            <Button
              key={index.toString()}
              className={index === 1 ? "mx-3" : ""}
              styled={"primary"}
              outline={!btnInfo.selected}
              onClick={() => {
                btnInfo.selected = true;
                chartButtons.forEach((btnInfo, btnIndex) => {
                  if (index !== btnIndex) {
                    btnInfo.selected = false;
                  }
                });
                setChartButtons((previousState) => {
                  return [...previousState];
                });
                chartAction(index);
              }}
            >
              {btnInfo.label}
            </Button>
          );
        })}
      </div>
      <Chart
        xAxisValues={xChartValues}
        coinValues={coinValues}
        currencyValues={currencyValues}
      />
    </ChartContainer>
  );
}

export default ChartCoins;
