import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/router/protectedroute/ProtectedRoute';
import pageurl from './components/router/url/pageurl';
import Pace from './components/utilities/Pace/Pace';
import {
  Login,
  SignUp,
  Terms,
  PrivacyPage,
  FAQ,
  LoanRequest,
  ContactUs,
  UserProfile,
  Recommendations,
  LandingPage,
  AboutUs,
  Page404,
  ComingSoon,
  Payment,
  Campaign,
  Blog,
  InviteRecommender,
  EmailVerification,
  EmailConfirmationFailure,
  EmailConfirmation,
  SinglePost,
  CreateBlogPost,
  ResetPassword,
  FundCampaign
} from './components/pages/mainpages';

import {
  FundeeDashboard,
  AdminLanding,
  AddFaq,
  AdminCampaign,
  AdminPayment,
  AdminSettings,
  AdminFunding,
  DefaultDashboard,
  InvestorDashboard,
} from './components/pages/dashboards';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Pace />
      <Switch>
        <Route exact path={pageurl.LANDING_PAGE_URL} component={LandingPage} />

        <Route exact path={pageurl.COMING_SOON_URL} component={ComingSoon} />

        <Route exact path={pageurl.LOGIN_PAGE_URL} component={Login} />

        <Route exact path={pageurl.REGISTER_PAGE_URL} component={SignUp} />

		<Route exact path={pageurl.RESET_PASSWORD_URL + `/:token`} component={ResetPassword} />

        <Route exact path={pageurl.TC_PAGE_URL} component={Terms} />

        <Route exact path={pageurl.PAYMENT_PAGE_URL} component={Payment} />

        <Route exact path={pageurl.FAQ_PAGE_URL} component={FAQ} />

        <Route exact path={pageurl.ABOUT_US_PAGE_URL} component={AboutUs} />

        <Route exact path={pageurl.CONTACT_US_PAGE_URL} component={ContactUs} />

        <Route exact path={pageurl.BLOG_PAGE_URL} component={Blog} />

        <Route
          exact
          path={pageurl.SINGLE_POST_URL + `/:userid`}
          component={SinglePost}
        />

        <Route
          exact
          path={pageurl.CREATE_NEW_POST_URL}
          component={CreateBlogPost}
        />

        <Route
          exact
          path={pageurl.PRIVACY_POLICY_PAGE_URL}
          component={PrivacyPage}
        />

        <Route
          exact
          path={pageurl.USER_RECOMMENDATIONS}
          component={Recommendations}
        />

        <Route
          exact
          path={pageurl.INVITE_RECOMMENDER_PAGE_URL}
          component={InviteRecommender}
        />

        <Route
          exact
          path={pageurl.EMAIL_VERIFICATION_URL}
          component={EmailVerification}
        />

        <Route
          exact
          path={pageurl.EMAIL_CONFIRMATION_FAILURE_URL}
          component={EmailConfirmationFailure}
        />

        <Route
          exact
          path={pageurl.EMAIL_CONFIRMATION_URL}
          component={EmailConfirmation}
        />
        <Route
          exact
          path={pageurl.FUND_A_CAMPAIGN}
          component={FundCampaign}
        />

        <ProtectedRoute
          exact
          path={pageurl.LOAN_REQUEST_PAGE_URL}
          component={LoanRequest}
        />

        <ProtectedRoute
          exact
          path={pageurl.INVESTOR_DASHBOARD}
          component={InvestorDashboard}
        />

        <ProtectedRoute
          exact
          path={pageurl.FUNDEE_DASHBOARD_PAGE_URL}
          component={FundeeDashboard}
        />

        <ProtectedRoute
          exact
          path={pageurl.COMPAIGN_PAGE_URL}
          component={Campaign}
        />

        <ProtectedRoute
          exact
          path={pageurl.ADMIN_DASHBOARD_PAGE_URL}
          component={AdminLanding}
        />

        <ProtectedRoute
          exact
          path={pageurl.ADMIN_FAQ_PAGE_URL}
          component={AddFaq}
        />

        <ProtectedRoute
          exact
          path={pageurl.ADMIN_CAMPAIGN_PAGE_URL}
          component={AdminCampaign}
        />

        <ProtectedRoute
          exact
          path={pageurl.ADMIN_FUNDING_PAGE_URL}
          component={AdminFunding}
        />

        <ProtectedRoute
          exact
          path={pageurl.ADMIN_PAYMENT_PAGE_URL}
          component={AdminPayment}
        />

        <ProtectedRoute
          exact
          path={pageurl.ADMIN_SETTINGS_PAGE_URL}
          component={AdminSettings}
        />

        <ProtectedRoute
          exact
          path={pageurl.DEFAULT_DASHBOARD_PAGE_URL}
          component={DefaultDashboard}
        />

        <ProtectedRoute
          exact
          path={pageurl.USER_PROFILE_PAGE_URL}
          component={UserProfile}
        />

        {/* <ProtectedRoute exact path={pageurl.USER_RECOMMENDATIONS} component={Recommendations} /> */}

        <ProtectedRoute
          exact
          path={pageurl.FUNDEE_DASHBOARD_PAGE_URL}
          component={FundeeDashboard}
        />

        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
