export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'distributor-management', 
      displayName: 'Distributor Management',
      meta: {
        iconClass: 'fa fa-university',
      },
      disabled: true,
      children: [
        {
          name: 'distributor-list',
          displayName: 'Distributor List',
          
        },
        {
          name: 'distributor-new-submission',
          displayName: 'New Registration',
        },
        {
          name: 'distributor-cancellation-submission',
          displayName: 'Cancellation Submission',
        },

      ],
    },

    {
      name: 'consultant-management',
      displayName: 'Consultant Management',
      meta: {
        iconClass: 'fa fa-id-card-o',
      },
      disabled: true,
      children: [
        {
          name: 'consultant-list',
          displayName: 'Consultant List',
        },
        {
          name: 'consultant-new-submission',
          displayName: 'New Registration',
        },
        {
          name: 'consultant-cancellation-submission',
          displayName: 'Cancellation Submission',
        },
      ],
    },
    {
      name: 'consultant-alert',
      displayName: 'Consultant Alert',
      meta: {
        iconClass: 'fa fa-balance-scale',
      },
      disabled: true,
      children: [
        {
          name: 'consultantAlert-recordList',
          displayName: 'CA Record',
        },

      ],
    },
    {
      name: 'cpd-management',
      displayName: 'CPD Management',
      meta: {
        iconClass: 'fa fa-list',
      },
      disabled: true,
      children: [
        {
          name: 'cpd-record',
          displayName: 'Consultant Point',
        },
        {
          name: 'post-vetting',
          displayName: 'Post-Vetting Submission',
        },
        {
          name: 'pre-vetting',
          displayName: 'pre-Vetting Submission',
        },
        {
          name: 'modules-submission',
          displayName: 'Modules Submission',
        },
        {
          name: 'waiver',
          displayName: 'Waiver Submission',
        },
      ],
    },

    {
      name: 'annual-fee',
      displayName: 'Annual Fee',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],
    },
    {
      name: 'finance-management',
      displayName: 'Finance Management',
      meta: {
        iconClass: 'fa fa-money',
      },
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],
    },
    {
      name: 'Fund Management',
      displayName: 'Fund Management',
      meta: {
        iconClass: 'fa fa-dollar',
      },
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
        {
          name: 'fundCreationlist',
          displayName: 'fimm creation list - distributor',
        },
        {
          name: 'fundCreationSecondLevelReview',
          displayName: 'fimm creation Review - distributor',
        },
        {
          name: 'fundCreationSecondLevelReview',
          displayName: 'fimm Lodgement list - distributor',
        },
        {
          name: 'fundCreationSecondLevelReview',
          displayName: 'fimm Lodgement Review - distributor',
        },
      ],
    },
    {
      name: 'Screen Management',
      displayName: 'Screen Management',
      meta: {
        iconClass: 'fa fa-desktop',
      },
      disabled: true,
      children: [
        {
          name: 'screen-module',
          displayName: 'Screen Module',
        },
        {
          name: 'screen-access',
          displayName: 'Screen Access',
        },
      ],
    },
    {
      name: 'system-setting',
      displayName: 'System Settings',
      meta: {
        iconClass: 'fa fa-gear',
      },
      disabled: true,

    },

  ],
}
