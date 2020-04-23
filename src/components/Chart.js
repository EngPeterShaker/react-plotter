import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getColoumnData } from "../redux/actions/index";

const Chart = props => {
  const dispatch = useDispatch();
  const { coords } = props;
  const chartData = useSelector(({ data }) => data.data);
  useEffect(() => {
    dispatch(
      getColoumnData({
        measures: [coords.measure],
        dimension: coords.dimension
      })
    );
  }, [coords.dimension, coords.measure, dispatch]);

  const options = {
    title: {
      text: `${chartData.dimension?.name ?? ""} Vs ${chartData.measure?.name ??
        ""}`
    },
    xAxis: {
      categories: chartData.dimension?.values
    },
    series: [{ data: chartData.measure?.values }]
  };
  return (
    <div>
      {!!chartData && (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </div>
  );
};

export default Chart;
