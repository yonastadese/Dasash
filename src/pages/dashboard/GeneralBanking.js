// @mui
import { Grid, Container, Stack, Typography } from '@mui/material';

// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  BankingContacts,
  BankingWidgetSummary,
  BankingInviteFriends,
  BankingQuickTransfer,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';
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

export default function GeneralBanking() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 5 }}>
          Jemo Branch Analytics
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


        

          {/* <Grid item xs={12} md={7}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <BankingWidgetSummary
                title="Income"
                icon={'eva:diagonal-arrow-left-down-fill'}
                percent={2.6}
                total={18765}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
              <BankingWidgetSummary
                title="Expenses"
                color="warning"
                icon={'eva:diagonal-arrow-right-up-fill'}
                percent={-0.5}
                total={8938}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
            </Stack>
          </Grid> */}

          {/* <Grid item xs={12} md={5}>
            <BankingCurrentBalance />
          </Grid> */}

          {/* <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <BankingBalanceStatistics />
              <BankingExpensesCategories />
              <BankingRecentTransitions />
            </Stack>
          </Grid> */}

          {/* <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <BankingQuickTransfer />
              <BankingContacts />
              <BankingInviteFriends />
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
