import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, ColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedPrimaryXAxis, stackedPrimaryYAxis, groupedCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const GroupedBarChart = ({ width, height }) => {
  const { currentMode } = useStateContext();

  
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        ...stackedPrimaryXAxis,
        rangePadding: 'Auto', // Set rangePadding back to Auto to group the bars properly
        valueType: 'Category', // The primaryXAxis value type is Category
        groupMode: 'Group', // Set the groupMode to Group for grouped bars
      }}
      primaryYAxis={{
        ...stackedPrimaryYAxis,
        minimum: 0, // Set the minimum value of the Y-axis
        maximum: 2500,
        interval: 500, // Mark numbers by 50 to 50
      }}
      width={width}
      height={height}
      chartArea={{
        border: { width: 0 },
        height: '100%', // Adjust the chart area height to show the bars properly
      }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {groupedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default GroupedBarChart;
