import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    year: 'Year',
    data: [
      { name: 'Bole', data: [75, 72, 60, 59.26] },
      { name: 'Jemo', data: [70.56, 65.6, 54.67, 84.07] },
      { name: 'Mexico', data: [58.33, 82.4, 68.67, 66.67] },
    ],
  },
];

export default function BankingBalanceStatistics() {
  const [seriesData, setSeriesData] = useState('Year');

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Physical Appearance', 'Employee Character', 'Service Effectiveness', 'Service Easiness'],
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="Shoppers Summary Rating"
        subheader="Out of 100%"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': { pl: 1, py: 0.5, pr: '24px !important', typography: 'subtitle2' },
              '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'background.neutral' },
              '& .MuiNativeSelect-icon': { top: 4, right: 0, width: 20, height: 20 },
            }}
          >
            {CHART_DATA.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}
