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
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findMaxAndIndex(array) {
  if (!Array.isArray(array) || array.length === 0) {
    // Handle empty or non-array input
    return null;
  }

  let maxNumber = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i+=1) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
      maxIndex = i;
    }
  }

  return {
    "maxNumber": maxNumber,
    "maxIndex": maxIndex
  };
}

function findMinAndIndex(array) {
  if (!Array.isArray(array) || array.length === 0) {
    // Handle empty or non-array input
    return null;
  }

  let minNumber = array[0];
  let minIndex = 0;

  for (let i = 1; i < array.length; i+=1) {
    if (array[i] < minNumber) {
      minNumber = array[i];
      minIndex = i;
    }
  }

  return {
    "minNumber": minNumber,
    "minIndex": minIndex
  };
}

const ratingObjs = {
	'physical_appearance_rating': {
    'titleName': 'Physical Appearance Rating',
    'randomRatings': Array.from({ length: 14 }, () => generateRandomNumber(2, 10)),
    'subRatingNames': ['Cleanliness (Inside & outside)','Lighting','Aesthetics','Branding','Thermal Comfort','Marketing Presence','Waiting Room Capacity','Waiting Area Management','Back Office Area Management','Enterance Accessibility','Parking Capacity','Ambient Sound','Location Convenience','Wayfinding Signage']
  },

  'employee_character_rating': {
    'titleName': 'Employee Character Rating',
    'randomRatings': Array.from({ length: 9 }, () => generateRandomNumber(2, 10)),
    'subRatingNames': ['Attentiveness ', 'Friendliness ', 'Courteousness', 'Empathy', 'Customer Centrality', 'Professionalism', 'Availability', 'Communication', 'Professional Dress']
  },

  'service_effectiveness_rating': {
    'titleName': 'Service Effectiveness Rating',
    'randomRatings': Array.from({ length: 11 }, () => generateRandomNumber(2, 10)),
    'subRatingNames': ['Service Delivery', 'Regulatory Compliance(National Bank)', 'Electricity Availability', 'System Speed/ Availability', 'Proactive Product Promotion', 'Transaction Accuracy', 'Service Accuracy', 'Employee Proactivity', 'Service Speed', 'Helpfulness', 'Proficiency']
  },

	'service_easiness_rating':  {
    'titleName': 'Service Easiness Rating',
    'randomRatings': Array.from({ length: 13 }, () => generateRandomNumber(2, 10)),
    'subRatingNames': ['Waiting time', 'Service Duration', 'Proactive Assistance', 'Timely Response', 'Problem-Solving Ability', 'Effortless', 'User- friendliness', 'Smoothness', 'Convenience', 'Straight-forwardness', 'Stream-linedness', 'Simplicity', 'Shamelessness']
  }

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
              CHART_DATA={[{data: ratingObjs.physical_appearance_rating.randomRatings}]} 
              categoriesInp={ratingObjs.physical_appearance_rating.subRatingNames} 
              titleInp={ratingObjs.physical_appearance_rating.titleName}
              subHeaderInp={"Accounts 18%"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Bole Branch Physical Appearance Highest score"
              percent={0.1}
              total={findMaxAndIndex(ratingObjs.physical_appearance_rating.randomRatings).maxNumber}
              text={ratingObjs.physical_appearance_rating.subRatingNames.at(findMaxAndIndex(ratingObjs.physical_appearance_rating.randomRatings).maxIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
             <AppWidgetSummary
              title="Bole Branch Physical Appearance lowest score"
              percent={-0.1}
              total={findMinAndIndex(ratingObjs.physical_appearance_rating.randomRatings).minNumber}
              text={ratingObjs.physical_appearance_rating.subRatingNames.at(findMinAndIndex(ratingObjs.physical_appearance_rating.randomRatings).minIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
              CHART_DATA={[{ data: ratingObjs.employee_character_rating.randomRatings }]} 
              categoriesInp={ratingObjs.employee_character_rating.subRatingNames} 
              titleInp={ratingObjs.employee_character_rating.titleName}
              subHeaderInp={"Accounts 25%"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Bole Branch Employee Character Highest score"
              percent={0.1}
              total={findMaxAndIndex(ratingObjs.employee_character_rating.randomRatings).maxNumber}
              text={ratingObjs.employee_character_rating.subRatingNames.at(findMaxAndIndex(ratingObjs.employee_character_rating.randomRatings).maxIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
             <AppWidgetSummary
              title="Bole Branch Employee Character lowest score"
              percent={-0.1}
              total={findMinAndIndex(ratingObjs.employee_character_rating.randomRatings).minNumber}
              text={ratingObjs.employee_character_rating.subRatingNames.at(findMinAndIndex(ratingObjs.employee_character_rating.randomRatings).minIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
              CHART_DATA={[{ data: ratingObjs.service_effectiveness_rating.randomRatings }]} 
              categoriesInp={ratingObjs.service_effectiveness_rating.subRatingNames} 
              titleInp={ratingObjs.service_effectiveness_rating.titleName}
              subHeaderInp={"Accounts 30%"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Bole Branch Service Effectiveness Highest score"
              percent={0.1}
              total={findMaxAndIndex(ratingObjs.service_effectiveness_rating.randomRatings).maxNumber}
              text={ratingObjs.service_effectiveness_rating.subRatingNames.at(findMaxAndIndex(ratingObjs.service_effectiveness_rating.randomRatings).maxIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
             <AppWidgetSummary
              title="Bole Branch Service Effectiveness lowest score"
              percent={-0.1}
              total={findMinAndIndex(ratingObjs.service_effectiveness_rating.randomRatings).minNumber}
              text={ratingObjs.service_effectiveness_rating.subRatingNames.at(findMinAndIndex(ratingObjs.service_effectiveness_rating.randomRatings).minIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates  
             CHART_DATA={[{ data: ratingObjs.service_easiness_rating.randomRatings }]} 
             categoriesInp={ratingObjs.service_easiness_rating.subRatingNames} 
             titleInp={ratingObjs.service_easiness_rating.titleName}
              subHeaderInp={"Accounts 27%"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Bole Branch Service Easiness Highest score"
              percent={0.1}
              total={findMaxAndIndex(ratingObjs.service_easiness_rating.randomRatings).maxNumber}
              text={ratingObjs.service_easiness_rating.subRatingNames.at(findMaxAndIndex(ratingObjs.service_easiness_rating.randomRatings).maxIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
             <AppWidgetSummary
              title="Bole Branch Service Easiness lowest score"
              percent={-0.1}
              total={findMinAndIndex(ratingObjs.service_easiness_rating.randomRatings).minNumber}
              text={ratingObjs.service_easiness_rating.subRatingNames.at(findMinAndIndex(ratingObjs.service_easiness_rating.randomRatings).minIndex)}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
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
