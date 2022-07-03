import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { Grid, Container, Typography } from '@mui/material';
import moment from 'moment';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import useFetch from '../hooks/useFetch';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const { data: vehicleData, isLoading: vehicleLoding } = useFetch('http://127.0.0.1:8000/api/vehicles');
  const { data: staffData, isLoading: staffLoading } = useFetch('http://127.0.0.1:8000/api/staff');
  const { data: swapDealData, isLoading: swapLoading } = useFetch('http://127.0.0.1:8000/api/swapvehicle');
  const { data: currntVist, isLoading: crrntVistLoading } = useFetch('http://127.0.0.1:8000/api/currentvisits');

  const july = currntVist?.currentvisits.filter((jul) => {
    return jul.month === 7;
  });

  const august = currntVist?.currentvisits.filter((aug) => {
    return aug.month === 8;
  });

  const cars = vehicleData?.Vehicle.filter((car) => {
    return car.make === 'Car';
  });

  const vans = vehicleData?.Vehicle.filter((van) => {
    return van.make === 'Van';
  });

  const jeeps = vehicleData?.Vehicle.filter((jeep) => {
    return jeep.make === 'Jeep';
  });

  const theme = useTheme();

  const percentage = ((july?.length - 68) * 100) / 68;

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Sale Done" color="error" total={2000} icon={'foundation:burst-sale'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Staff"
              total={staffLoading ? 0 : staffData?.staff.length}
              color="info"
              icon={'fa6-solid:people-group'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Item Available"
              total={vehicleLoding ? 0 : vehicleData?.Vehicle.length}
              color="warning"
              icon={'carbon:vehicle-insights'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Swap Deals"
              total={swapLoading ? 0 : swapDealData?.posts.length}
              icon={'fluent:people-swap-20-filled'}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader={`(${Math.round(percentage)}%) than last month`}
              chartLabels={[
                '01/02/2022',
                '02/02/2022',
                '03/02/2022',
                '04/02/2022',
                '05/02/2022',
                '06/02/2022',
                '07/02/2022',
                '08/02/2022',
                '09/02/2022',
                '10/02/2022',
                '11/02/2022',
                '12/02/2022',
              ]}
              chartData={[
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 30],
                // },
                {
                  name: 'Site Visits',
                  type: 'area',
                  fill: 'gradient',
                  data: [4, 5, 1, 7, 2, 68, july?.length, august?.length, 0, 0, 0, 0],
                },
                // {
                //   name: 'Team C',
                //   type: 'line',
                //   fill: 'solid',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 15],
                // },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Available Vehicles"
              chartData={[
                { label: 'Cars', value: 0 + cars?.length },
                { label: 'Vans', value: 0 + vans?.length },
                { label: 'Jeeps', value: 0 + jeeps?.length },
              ]}
              chartColors={[theme.palette.primary.main, theme.palette.chart.violet[0], theme.palette.chart.yellow[0]]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
