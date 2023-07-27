// @mui
import { Grid, Container, Typography } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  BookingDetails,
  BookingBookedRoom,
  BookingTotalIncomes,
  BookingRoomAvailable,
  BookingNewestBooking,
  BookingWidgetSummary,
  BookingCheckInWidgets,
  BookingCustomerReviews,
  BookingReservationStats,
} from '../../sections/@dashboard/general/booking';
// assets
import { BookingIllustration, CheckInIllustration, CheckOutIllustration } from '../../assets';

import {
  AnalyticsTasks,
  AnalyticsNewsUpdate,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsWidgetSummary,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates,
} from '../../sections/@dashboard/general/analytics';
// ----------------------------------------------------------------------
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function GeneralBooking() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 5 }}>
          Mexico Branch Analytics
        </Typography>

        <Grid container spacing={3}>


          
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
              CHART_DATA={[{ data: Array.from({ length: 14 }, () => generateRandomNumber(2, 10)) }]} 
              categoriesInp={['Cleanliness (Inside & outside)','Lighting','Aesthetics','Branding','Thermal Comfort','Marketing Presence','Waiting Room Capacity','Waiting Area Management','Back Office Area Management','Enterance Accessibility','Parking Capacity','Ambient Sound','Location Convience','Wayfinding Signage']} 
              titleInp={"Physical Appearance Rating"}
              subHeaderInp={"Accounts 18%"}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
              CHART_DATA={[{ data: Array.from({ length: 9 }, () => generateRandomNumber(2, 10)) }]} 
              categoriesInp={['Attentiveness ', 'Friendliness ', 'Courteousness', 'Empathy', 'Customer Centrality', 'Professionalism', 'Availability', 'Communication', 'Professional Dress']} 
              titleInp={"Employee Character Rating"}
              subHeaderInp={"Accounts 25%"}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
              CHART_DATA={[{ data: Array.from({ length: 11 }, () => generateRandomNumber(2, 10)) }]} 
              categoriesInp={['Service Delivery', 'Regulatory Compliance(National Bank)', 'Electricity Availability', 'System Speed/ Availability', 'Proactive Product Promotion', 'Transaction Accuracy', 'Service Accuracy', 'Employee Proactivity', 'Service Speed', 'Helpfulness', 'Proficiency']} 
              titleInp={"Service Effectiveness Rating"}
              subHeaderInp={"Accounts 30%"}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
              CHART_DATA={[{ data: Array.from({ length: 13 }, () => generateRandomNumber(2, 10)) }]} 
              categoriesInp={['Waiting time', 'Service Duration', 'Proactive Assistance', 'Timely Response', 'Problem-Solving Ability', 'Effortless', 'User- friendliness', 'Smoothness', 'Convince', 'Straight-forwardness', 'Stream-linedness', 'Simplicity', 'Shamelessness']} 
              titleInp={"Service Easiness Rating"}
              subHeaderInp={"Accounts 27%"}
            />
          </Grid>

      
          

          {/* <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Total Booking" total={714000} icon={<BookingIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Check In" total={311000} icon={<CheckInIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Check Out" total={124000} icon={<CheckOutIllustration />} />
          </Grid> */}
{/* 
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BookingTotalIncomes />
              </Grid>

              <Grid item xs={12} md={6}>
                <BookingBookedRoom />
              </Grid>

              <Grid item xs={12} md={12}>
                <BookingCheckInWidgets />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingRoomAvailable />
          </Grid>

          <Grid item xs={12} md={12}>
            <BookingReservationStats />
          </Grid> */}

          {/* <Grid item xs={12} md={4}>
            <BookingCustomerReviews />
          </Grid> */}

          {/* <Grid item xs={12}>
            <BookingNewestBooking />
          </Grid>

          <Grid item xs={12}>
            <BookingDetails />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
