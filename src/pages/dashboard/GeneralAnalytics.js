// @mui
import { Grid, Container, Typography } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
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
export default function GeneralAnalytics() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Analytics">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Bole Branch Analytics
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





          {/* <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Item Orders"
              total={1723315}
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AnalyticsWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits />
          </Grid>

          

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentSubject />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AnalyticsNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsTasks />
          </Grid> */}

        </Grid>
      </Container>
    </Page>
  );
}
