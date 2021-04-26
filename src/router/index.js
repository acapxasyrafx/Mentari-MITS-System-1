import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AuthLayoutDistributor from '../components/auth/AuthLayoutDistributor'
import AuthLayoutDistributorRecoverPass from '../components/auth/AuthLayoutRecoverPassword'
import AuthLayoutConsultant from '@/components/auth/AuthLayoutConsultant'
import AuthLayoutConsultantRecoverPass from '../components/auth/AuthLayoutRecoverPassword'
import AuthLayoutOthers from '@/components/auth/AuthLayoutOthers'
import AuthLayoutOthersRecoverPass from '../components/auth/AuthLayoutRecoverPassword'
import AppLayout from '../components/admin/AppLayout'
import defaultPage from '../components/auth/default'
import * as services from '../app/module0/services'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  // mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  mode: 'history',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'default' },
      meta: {
        progress: {
          func: [
            { call: 'color', modifier: 'temp', argument: '#ffb000' },
            { call: 'fail', modifier: 'temp', argument: '#6e0000' },
            { call: 'location', modifier: 'temp', argument: 'top' },
            {
              call: 'transition',
              modifier: 'temp',
              argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
            },
          ],
        },
      },
    },
    {
      name: 'default',
      path: '/default',
      component: defaultPage,

    },
    {
      path: '/auth-others',
      component: AuthLayoutOthers,
      children: [
        {
          name: 'login-others',
          path: 'login-others',
          component: () => import('../components/auth/login/Login-others.vue'),
          // default: true,
          // beforeEnter (to, from, next) {
          //   if (!services.isLoggedIn()) {
          //     next()
          //   } else {
          //     next('/others/dashboard');
          //   }
          // },
        },
        {
          name: 'signup-others',
          path: 'signup-others',
          component: () => import('../components/auth/signup/Signup-others.vue'),
        },
        // {
        //   name: 'recover-password',
        //   path: 'recover-password',
        //   component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
        // },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
      // beforeEnter (to, from, next) {
      //   if (!services.isLoggedIn()) {
      //     next()
      //   } else {
      //     next('/others/dashboard');
      //   }
      // },
    },
    {
      path: '/auth-others-recover',
      component: AuthLayoutOthersRecoverPass,
      children: [
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
          props: true,
        },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
    },
    {
      path: '/auth-consultant',
      component: AuthLayoutConsultant,
      children: [
        {
          name: 'login-consultant',
          path: 'login-consultant',
          component: () => import('../components/auth/login/Login-consultant.vue'),
          // beforeEnter (to, from, next) {
          //   if (!services.isLoggedIn()) {
          //     next()
          //   } else {
          //     next('/consultant/dashboard');
          //   }
          // },
        },
        {
          name: 'signup-consultant',
          path: 'signup-consultant',
          component: () => import('../components/auth/signup/Signup-consultant.vue'),
        },
        // {
        //   name: 'recover-password',
        //   path: 'recover-password',
        //   component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
        // },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
      // beforeEnter (to, from, next) {
      //   if (!services.isLoggedIn()) {
      //     next()
      //   } else {
      //     next('/consultant/dashboard');
      //   }
      // },
    },
    {
      path: '/auth-consultant-recover',
      component: AuthLayoutConsultantRecoverPass,
      children: [
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
          props: true,
        },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
    },
    {
      path: '/auth-distributor',
      component: AuthLayoutDistributor,
      children: [
        {
          name: 'login-distributor',
          path: 'login-distributor',
          component: () => import('../components/auth/login/Login-distributor.vue'),
          //  default: true,
          default: true,
          // default: true,
          // beforeEnter (to, from, next) {
          //   if (!services.isLoggedIn()) {
          //     next()
          //   } else {
          //     next('/distributor/dashboard');
          //   }
          // },
        },
        {
          name: 'signup-distributor',
          path: 'signup-distributor',
          component: () => import('../components/auth/signup/Signup-distributor.vue'),
        },
        // {
        //   name: 'recover-password',
        //   path: 'recover-password',
        //   component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
        // },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
      // beforeEnter (to, from, next) {
      //   if (!services.isLoggedIn()) {
      //     next()
      //   } else {
      //     next('/distributor/dashboard');
      //   }
      // },
    },
    {
      path: '/auth-distributor-recover',
      component: AuthLayoutDistributorRecoverPass,
      children: [
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
          props: true,
        },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
          default: true,
          
        },
        {
          name: 'signup',
          path: 'signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
      ],
    },
    // {
    //   path: '/register',
    //  component: EmptyParentComponent,
    //   children: [
    //     {
    //       name: 'distributor-self-registration',
    //       path: 'distributor-self-registration',
    //       component: () => import('../pages/company-management/distributor/cm1_distributor_selfRegistration.vue'),
    //     },
    //     // {
    //     //   path: '',
    //     //   redirect: { name: 'login' },
    //     // },
    //   ],
    // },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: () => import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    /* ---------------ADMIN PAGES--------------------- */
    {
      name: 'Admin',
      path: '/fimm',
      component: AppLayout,
      meta: {
        progress: {
          func: [
            { call: 'color', modifier: 'temp', argument: '#ffb000' },
            { call: 'fail', modifier: 'temp', argument: '#6e0000' },
            { call: 'location', modifier: 'temp', argument: 'top' },
            {
              call: 'transition',
              modifier: 'temp',
              argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
            },
          ],
        },
      },
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          default: true,
        },
        {
          name: 'company-register',
          path: 'company-register',
          component: () => import('../pages/company-management/cm1_CompanyRegister.vue'),
          props: true,
        },
        {
          name: 'distributor-details-registration',
          path: 'distributor-details-registration',
          component: () => import('../pages/distributor-management/distributor/cm1_distributor_detailsRegistration.vue'),
        },
        {
          name: 'event-list',
          path: 'event-list',
          component: () => import('../pages/admin-configuration/announcement-management/cm0_eventList.vue'),
        },
        {
          name: 'new-event',
          path: 'new-event',
          component: () => import('../pages/admin-configuration/announcement-management/cm0_newEvent.vue'),
        },
        {
          name: 'update-event',
          path: 'update-event/:MANAGE_EVENT_ID',
          component: () => import('../pages/admin-configuration/announcement-management/cm0_eventUpdate.vue'),
        },
        {
          name: 'eventList-approval',
          path: 'eventList-approval',
          component: () => import('../pages/admin-configuration/announcement-management/cm0_eventApprovalList.vue'),
        },
        {
          name: 'event-hod-approval',
          path: 'event-hod-approval',
          component: () => import('../pages/admin-configuration/announcement-management/cm0_eventHodApproval.vue'),
        },
        {
          name: 'event-approval-details',
          path: 'event-approval-details',
          component: () => import('../pages/admin-configuration/announcement-management/cm0_eventApprovalDetails.vue'),
        },
        {
          name: 'circular-list',
          path: 'circular-list',
          component: () => import('../pages/admin-configuration/circular-management/cm0_circularList.vue'),
        },
        {
          name: 'new-circular',
          path: 'new-circular',
          component: () => import('../pages/admin-configuration/circular-management/cm0_newCircular.vue'),
        },
        {
          name: 'circular-details',
          path: 'circular-details',
          component: () => import('../pages/admin-configuration/circular-management/cm0_circularDetails.vue'),
        },
        {
          name: 'circular-update',
          path: 'circular-update/:id',
          component: () => import('../pages/admin-configuration/circular-management/cm0_circularUpdate.vue'),
        },
        {
          name: 'circular-hod-approvalList',
          path: 'circular-hod-approvalList',
          component: () => import('../pages/admin-configuration/circular-management/cm0_circularHodApprovalList.vue'),
        },
        {
          name: 'circular-hod-approvalDetails',
          path: 'circular-hod-approvalDetails',
          component: () => import('../pages/admin-configuration/circular-management/cm0_circularHodApprovalDetails.vue'),
        },
        {
          name: 'excel-template',
          path: 'excel-template',
          component: () => import('../pages/admin-configuration/document-management/cm0_excelTemplate.vue'),
        },
        {
          name: 'document-checkList',
          path: 'document-checkList',
          component: () => import('../pages/admin-configuration/document-management/cm0_documentChecklist.vue'),
        },
        {
          name: 'calendar-management',
          path: 'calendar-management',
          component: () => import('../pages/admin-configuration/calendar-management/cm0_calendarManagement.vue'),
        },
        {
          name: 'address-management',
          path: 'address-management',
          component: () => import('../pages/admin-configuration/address-management/cm0_addressManagement.vue'),
          meta: {
            progress: {
              func: [
                { call: 'color', modifier: 'temp', argument: '#ffb000' },
                { call: 'fail', modifier: 'temp', argument: '#6e0000' },
                { call: 'location', modifier: 'temp', argument: 'top' },
                {
                  call: 'transition',
                  modifier: 'temp',
                  argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
                },
              ],
            },
          },
        },
        {

          name: 'sms-notification',
          path: 'sms-notification',
          component: () => import('../pages/admin-configuration/sms-notification/cm0_smsNotifcation.vue'),
        },
        {
          name: 'finance-main-setting',
          path: 'finance-main-setting',
          component: () => import('../pages/admin-configuration/byModule-finance/cm0_finance_mainSetting.vue'),
        },
        {
          name: 'finance-account-setting',
          path: 'finance-account-setting',
          component: () => import('../pages/admin-configuration/byModule-finance/cm0_finance_account_setting.vue'),
        },
        {
          name: 'email-notification',
          path: 'email-notification',
          component: () => import('../pages/admin-configuration/Email-Management/email-notification.vue'),
        },
        {
          name: 'ldap-configuration',
          path: 'ldap-configuration',
          component: () => import('../pages/admin-configuration/LDAP-Management/cm0_ldapConfiguration.vue'),

        },
        {
          name: 'finance-configuration',
          path: 'finance-configuration',
          component: () => import('../pages/admin-configuration/byModule-finance/cm0_finance_mainSetting.vue'),
        },
        {
          name: 'distributor-configuration',
          path: 'distributor-configuration',
          component: () => import('../pages/admin-configuration/byModule-distributor/cm0_distributor_mainSetting.vue'),
        },
        {
          name: 'consultant-configuration',
          path: 'consultant-configuration',
          component: () => import('../pages/admin-configuration/byModule-consultant/cm0_consultant_mainSetting.vue'),
        },
        {
          name: 'cpd-configuration',
          path: 'cpd-configuration',
          component: () => import('../pages/admin-configuration/byModule-CPD/cpd-main-setting.vue'),
        },
        {
          name: 'cpd-configuration-2',
          path: 'cpd-configuration-2',
          component: () => import('../pages/admin-configuration/byModule-CPD/cpd-main-setting-2.vue'),
        },
        {
          name: 'annualFee-configuration',
          path: 'annualFee-configuration',
          component: () => import('../pages/admin-configuration/byModule-annualFee/cm0_annualFee_mainSetting.vue'),
        },
        {
          name: 'fundMalaysia-configuration',
          path: 'fundMalaysia-configuration',
          component: () => import('../pages/admin-configuration/byModule-fundMalaysia/cm0_fundMalaysia_mainSetting.vue'),
        },
        // {
        //   name: 'distributor-configuration',
        //   path: 'distributor-configuration',
        //   component: () => import('../pages/admin-configuration/byModule-distributor/cm0_distributor_mainSetting.vue'),
        // },
        {
          name: 'maintenance-list',
          path: 'maintenance-list',
          component: () => import('../pages/admin-configuration/page-maintenance-management/cm0_maintenanceList.vue'),
        },
        {
          name: 'screen-access',
          path: 'screen-access',
          component: () => import('../pages/admin-configuration/screen-management/cm0_screenAccess.vue'),
        },
        {
          name: 'screen-module',
          path: 'screen-module',
          component: () => import('../pages/admin-configuration/screen-management/cm0_screenModule.vue'),
          props: true,
        },
        {
          name: 'demo-pdfviewer',
          path: 'demo-pdfviewer',
          component: () => import('../pages/demo/pdf-viewer'),
        },
        {
          name: 'demo-excel',
          path: 'demo-excel',
          component: () => import('../components/excel-upload/index'),
        },
        {
          name: 'demo-excelviewer',
          path: 'demo-excelviewer',
          component: () => import('../pages/demo/excel-viewer'),
        },
        {
          name: 'demo-koolreport',
          path: 'demo-koolreport',
          component: () => import('../pages/demo/koolreport'),
        },
        {
          name: 'consultant-profile',
          path: 'consultant-profile',
          component: () => import('../pages/consultant_profile.vue'),
        },
        {
          name: 'registered-case',
          path: 'registered-case',
          component: () => import('../pages/registered_case.vue'),
        },
        // fimm-consultant alert
        {
          name: 'consultantAlert-recordList',
          path: 'consultantAlert-recordList',
          component: () => import('../pages/consultant-alert/fimm/cm03_consultantAlert_recordList.vue'),
        },
        {
          name: 'consultantAlert-consultantCaRecord',
          path: 'consultantAlert-consultantCaRecord',
          component: () => import('../pages/consultant-alert/fimm/cm03_consultantAlert_consultantCaRecord.vue'),
          props: true,
        },
        {
          name: 'consultantAlert-searchConsultant',
          path: 'consultantAlert-searchConsultant',
          component: () => import('../pages/consultant-alert/fimm/cm03_consultantAlert_searchConsultant.vue'),
        },
        {
          name: 'consultantAlert-registerNewCase',
          path: 'consultantAlert-registerNewCase',
          component: () => import('../pages/consultant-alert/fimm/cm03_consultantAlert_registerNewCase.vue'),
          props: true,
        },
        {
          name: 'consultantAlert-registerExistingRecord',
          path: 'consultantAlert-registerExistingRecord',
          component: () => import('../pages/consultant-alert/fimm/cm03_consultantAlert_registerExistingRecord.vue'),
          props: true,
        },
        {
          name: 'ui',
          path: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              name: 'colors',
              path: 'colors',
              component: () => import('../components/ui/colors/Colors'),
            },

          ],
        },

        {
          name: 'system-setting',
          path: 'system-setting',
          component: () => import('../pages/admin-configuration/cm0_systemSetting.vue'),
        },
        {
          name: 'group-management',
          path: 'group-management',
          component: () => import('../pages/admin-configuration/group-management/cm0_groupManagement.vue'),
        },
        {
          name: 'approval-mainList',
          path: 'approval-mainList',
          component: () => import('../pages/admin-configuration/cm0_approval_mainList.vue'),
        },
        {
          name: 'newDistributor-approval-level',
          path: 'newDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-distributor/newDistributor_approvalLevel.vue'),
        },
        {
          name: 'updateDistributor-approval-level',
          path: 'updateDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-distributor/updateDistributor-approval-level.vue'),
        },
        {
          name: 'suspensionRevocationDistributor-approval-level',
          path: 'suspensionRevocationDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-distributor/suspensionRevocationDistributor-approval-level.vue'),
        },
        {
          name: 'cessationDistributor-approval-level',
          path: 'cessationDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-distributor/cessationDistributor-approval-level.vue'),
        },
        {
          name: 'divestmentDistributor-approval-level',
          path: 'divestmentDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-distributor/divestmentDistributor-approval-level.vue'),
        },
        {
          name: 'newConsultant-approval-level',
          path: 'newConsultant-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Consultant/newConsultant_approvalLevel.vue'),
        },
        {
          name: 'terminationConsultant-approval-level',
          path: 'terminationConsultant-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Consultant/terminationConsultant_approvalLevel.vue'),
        },
        {
          name: 'banckruptcyCheckConsultant-approval-level',
          path: 'banckruptcyCheckConsultant-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Consultant/bankruptcyCheck_approvalLevel.vue'),
        },
        {
          name: 'appealConsultant-approval-level',
          path: 'appealConsultant-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Consultant/appealConsultant_approvalLevel.vue'),
        },
        {
          name: 'newCase-approval-level',
          path: 'newCase-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CAS/newCase-approval-level.vue'),
        },
        {
          name: 'fundCreation-approval-level',
          path: 'fundCreation-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-FMS/fundCreation-approval-level.vue'),
        },
        {
          name: 'fundLodgement-approval-level',
          path: 'fundLodgement-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-FMS/fundLodgement-approval-level.vue'),
        },
        {
          name: 'fundManagement-approval-level',
          path: 'fundManagement-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-FMS/fundManagement-approval-level.vue'),
        },
        {
          name: 'fundTermination-approval-level',
          path: 'fundTermination-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-FMS/fundTermination-approval-level.vue'),
        },
        {
          name: 'navManagement-approval-level',
          path: 'navManagement-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-FMS/navManagement-approval-level.vue'),
        },
        {
          name: 'newConsultantPayment-approval-level',
          path: 'newConsultantPayment-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Finance/newConsultantPayment-approval-level.vue'),
        },
        {
          name: 'distributor-cessationList-rdApproval',
          path: 'distributor-cessationList-rdApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCessationList_rdApproval.vue'),
        },
        {
          name: 'distributor-CessationDetails-rdApproval',
          path: 'distributor-CessationDetails-rdApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCessasionDetails_rdApproval.vue'),
        },
        {
          name: 'distributor-cessationList-hod-rdApproval',
          path: 'distributor-cessationList-hod-rdApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCessationList_hod_rdApproval.vue'),
        },
        {
          name: 'distributor-CessationDetails-hod-rdApproval',
          path: 'distributor-CessationDetails-hod-rdApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCessasionDetails_hod_rdApproval.vue'),
        },
        {
          name: 'distributor-Cancellation-Type',
          path: 'distributor-Cancellation-Type',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationType.vue'),
        },
        {
          name: 'distributor-Cancellation-rdSubmissionList',
          path: 'distributor-Cancellation-rdSubmissionList',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationList.vue'),
        },
        {
          name: 'distributor-Cancellation-Submission',
          path: 'distributor-Cancellation-Submission',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationDistributorList.vue'),
        },
        {
          name: 'distributor-Cancellation-Submission-Details',
          path: 'distributor-Cancellation-Submission-Details',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationSubmission.vue'),
        },
        {
          name: 'distributor-cancellationList-hod-rdApproval',
          path: 'distributor-cancellationList-hod-rdApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationList_hod_rdApproval.vue'),
        },
        {
          name: 'distributor-cancellationDetails-hod-rdApproval',
          path: 'distributor-cancellationDetails-hod-rdApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationDetails_hod_rdApproval.vue'),
        },
        {
          name: 'distributor-cancellationList-gmApproval',
          path: 'distributor-cancellationList-gmApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationList_gmApproval.vue'),
        },
        {
          name: 'distributor-cancellationDetails-gmApproval',
          path: 'distributor-cancellationDetails-gmApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationDetails_gmApproval.vue'),
        },
        {
          name: 'distributor-cancellationList-ceoApproval',
          path: 'distributor-cancellationList-ceoApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationList_ceoApproval.vue'),
        },
        {
          name: 'distributor-cancellationDetails-ceoApproval',
          path: 'distributor-cancellationDetails-ceoApproval',
          component: () => import('../pages/company-management/fimm/cm1_distributorCancellationDetails_ceoApproval.vue'),
        },
        {
          name: 'newDistributorPayment-approval-level',
          path: 'newDistributorPayment-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Finance/newDistributorPayment-approval-level.vue'),
        },
        {
          name: 'prepaymentRefundDistributor-approval-level',
          path: 'prepaymentRefundDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Finance/prepaymentRefundDistributor-approval-level.vue'),
        },
        {
          name: 'prepaymentTopupDistributor-approval-level',
          path: 'prepaymentTopupDistributor-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Finance/prepaymentTopupDistributor-approval-level.vue'),
        },
        {
          name: 'anualFee-approval-level',
          path: 'anualFee-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-AnnualFee/anualFee-approval-level.vue'),
        },
        {
          name: '5ModulesSubmission-approval-level',
          path: '5ModulesSubmission-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CPD/5ModulesSubmission-approval-level.vue'),
        },
        {
          name: 'newTrainingProvider-approval-level',
          path: 'newTrainingProvider-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CPD/newTrainingProvider-approval-level.vue'),
        },
        {
          name: 'postVettingSubmission-approval-level',
          path: 'postVettingSubmission-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CPD/postVettingSubmission-approval-level.vue'),
        },
        {
          name: 'preVettingSubmission-approval-level',
          path: 'preVettingSubmission-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CPD/preVettingSubmission-approval-level.vue'),
        },
        {
          name: 'revocationCPD-approval-level',
          path: 'revocationCPD-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CPD/revocationCPD-approval-level.vue'),
        },
        {
          name: 'waiverSubmission-approval-level',
          path: 'waiverSubmission-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-CPD/waiverSubmission-approval-level.vue'),
        },
        {
          name: 'annoucement-approval-level',
          path: 'annoucement-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Admin/annoucementManagement-approval-level.vue'),
        },
        {
          name: 'circular-approval-level',
          path: 'circular-approval-level',
          component: () => import('../pages/admin-configuration/byApproval-Admin/circularManagement-approval-level.vue'),
        },
        {
          name: 'distributor-SubmissionList-rdApproval',
          path: 'distributor-SubmissionList-rdApproval',
          component: () => import('../pages/distributor-management/fimm/cm1_distributorSubmissionList_rdApproval.vue'),
        },
        {
          name: 'distributor-SubmissionDetails-rdApproval',
          path: 'distributor-SubmissionDetails-rdApproval',
          component: () => import('../pages/distributor-management/fimm/cm1_distributorSubmissionDetails_rdApproval.vue'),
          props: true,
        },
        {
          name: 'fundCreation-list',
          path: 'fundCreation-list',
          component: () => import('../pages/funds-malaysia/fimm/cm5_fimm-fund-creationlist.vue'),
        },
        {
          name: 'fundCreation-review',
          path: 'fundCreation-review',
          component: () => import('../pages/funds-malaysia/fimm/cm5_fimm-fund-creation-review.vue'),
          props: true,
        },
        {
          name: 'fundLodge-submitList',
          path: 'fundLodge-submitList',
          component: () => import('../pages/funds-malaysia/fimm/cm5_fimm-fundLodge-submitList.vue'),
          props: true,
        },
      ],
    },
    /* ---------------DISTRIBUTOR PAGES--------------------- */
    {
      name: 'Distributor',
      path: '/distributor',
      component: AppLayout,
      children: [
        {
          name: 'distributor-dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          // default: true,
        },
        {
          name: 'distributor-self-registration',
          path: 'distributor-self-registration',
          component: () => import('../pages/company-management/distributor/cm1_distributor_selfRegistration.vue'),
        },
        {
          name: 'distributor-details-registration',
          path: 'distributor-details-registration',
          component: () => import('../pages/distributor-management/distributor/cm1_distributor_detailsRegistration.vue'),
        },
        {
          name: 'distributor-cessation-secondApproval',
          path: 'distributor-cessation-secondApproval',
          component: () => import('../pages/company-management/distributor/cm1_distributorCessationList_secondApproval.vue'),
        },
        {
          name: 'distributor-suspension-appeal',
          path: 'distributor-suspension-appeal',
          component: () => import('../pages/company-management/distributor/cm1_distributorSuspension_appeal.vue'),
        },
        // start--acap
        {
          name: 'distributor-member-selfRegistration',
          path: 'distributor-member-selfRegistration',
          component: () => import('../pages/distributor-management/distributor/cm1_distributorMember_selfRegistration.vue'),
        },
        {
          name: 'distributor-member-detailsRegistration',
          path: 'distributor-member-detailsRegistration',
          component: () => import('../pages/distributor-management/distributor/cm1_distributorMember_detailsRegistration.vue'),
        },
        {
          name: 'distributor-member-verification',
          path: 'distributor-member-verification',
          component: () => import('../pages/distributor-management/distributor/cm1_distributorMember_verification.vue'),
        },
        {
          name: 'distributor-member-groupSelection',
          path: 'distributor-member-groupSelection',
          component: () => import('../pages/distributor-management/distributor/cm1_distributorMember_groupSelection.vue'),
        },
        {
          name: 'distributor-member-approval',
          path: 'distributor-member-approval',
          component: () => import('../pages/distributor-management/distributor/cm1_distributorMember_approval.vue'),
        },
        // fund creation
        {
          name: 'fundCreation',
          path: 'fundCreation',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributor_fundCreation.vue'),
          props: true,
        },
        {
          name: 'fundCreationlist',
          path: 'fundCreationList',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributor-fundCreationList.vue'),
          props: true,
        },
        {
          name: 'fundCreationSecondLevelReview',
          path: 'fundCreationSecondLevelReview',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributor_fundCreationSecondReview.vue'),
          props: true,
        },

        // fund lodge
        
        {
          name: 'fundLodgementList',
          path: 'fundLodgementList',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributor_fundCreationSecondReview.vue'),
          props: true,
        },
        {
          name: 'fundLodgementDetails',
          path: 'fundLodgementDetails',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributor_fundCreationSecondReview.vue'),
          props: true,
        },

        {
          name: 'fundLodgementSubmissionDetails',
          path: 'fundLodgementSubmissionDetails',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributorFundLodgeSubmitDetails.vue'),
        },
        {
          name: 'fundLodgementSubmissionList',
          path: 'fundLodgementSubmissionList',
          component: () => import('../pages/funds-malaysia/distributor/cm5_distributorFundLodgeSubmitList.vue'),
        },
        // end--acap
      ],
    },
    /* ---------------CONSULTANT PAGES--------------------- */
    {
      name: 'Consultant',
      path: '/consultant',
      component: AppLayout,
      children: [
        {
          name: 'consultant-self-registration',
          path: 'consultant-self-registration',
          component: () => import('../pages/consultant-management/consultant/cm2_consultant_selfRegistration.vue'),
        },
      ],
    },
    /* ---------------THIRD PARTY PAGES--------------------- */
    {
      name: 'Third Party',
      path: '/third-party',
      component: AppLayout,
      children: [

      ],
    },
    /* ---------------TRAINING PROVIDER PAGES--------------------- */
    {
      name: 'Training Provider',
      path: '/training-provider',
      component: AppLayout,
      children: [

      ],
    },
  ],
})
