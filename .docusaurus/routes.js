import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0ff'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8db'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2ac'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '1eb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c5d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '3d3'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '026'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '835'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '02e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '852'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5d1'),
            routes: [
              {
                path: '/docs/HealthKareAI/doctor/login',
                component: ComponentCreator('/docs/HealthKareAI/doctor/login', '9bf'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/doctor/register',
                component: ComponentCreator('/docs/HealthKareAI/doctor/register', 'cb8'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/doctor/verifyOTP',
                component: ComponentCreator('/docs/HealthKareAI/doctor/verifyOTP', '9c7'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/error_codes',
                component: ComponentCreator('/docs/HealthKareAI/error_codes', '17b'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/hospital/getDetails',
                component: ComponentCreator('/docs/HealthKareAI/hospital/getDetails', '73c'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/hospital/login',
                component: ComponentCreator('/docs/HealthKareAI/hospital/login', '3ae'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/hospital/register',
                component: ComponentCreator('/docs/HealthKareAI/hospital/register', 'bc2'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/hospital/verifyOTP',
                component: ComponentCreator('/docs/HealthKareAI/hospital/verifyOTP', '8e3'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/family/addUserToFamily',
                component: ComponentCreator('/docs/HealthKareAI/User-App/family/addUserToFamily', '109'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/family/createFamily',
                component: ComponentCreator('/docs/HealthKareAI/User-App/family/createFamily', '2d1'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/family/getFamilyAppointments',
                component: ComponentCreator('/docs/HealthKareAI/User-App/family/getFamilyAppointments', 'd10'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/family/getFamilyMembers',
                component: ComponentCreator('/docs/HealthKareAI/User-App/family/getFamilyMembers', 'c01'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/family/getFamilyPrescriptions',
                component: ComponentCreator('/docs/HealthKareAI/User-App/family/getFamilyPrescriptions', '998'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/family/updateFamilyMemberDetails',
                component: ComponentCreator('/docs/HealthKareAI/User-App/family/updateFamilyMemberDetails', 'd68'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/getUserDetails',
                component: ComponentCreator('/docs/HealthKareAI/User-App/getUserDetails', 'd1b'),
                exact: true
              },
              {
                path: '/docs/HealthKareAI/User-App/login',
                component: ComponentCreator('/docs/HealthKareAI/User-App/login', '3ea'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/register',
                component: ComponentCreator('/docs/HealthKareAI/User-App/register', '826'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/updateUserDetails',
                component: ComponentCreator('/docs/HealthKareAI/User-App/updateUserDetails', '900'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/HealthKareAI/User-App/verifyOTP',
                component: ComponentCreator('/docs/HealthKareAI/User-App/verifyOTP', 'a29'),
                exact: true,
                sidebar: "healthKareAI"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              },
              {
                path: '/docs/karmapay/',
                component: ComponentCreator('/docs/karmapay/', 'ae0'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/karmapay/api-documentation/create-order',
                component: ComponentCreator('/docs/karmapay/api-documentation/create-order', '884'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/karmapay/getting-started/account-setup',
                component: ComponentCreator('/docs/karmapay/getting-started/account-setup', '83a'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/karmapay/getting-started/phonepe',
                component: ComponentCreator('/docs/karmapay/getting-started/phonepe', 'ac5'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/karmapay/getting-started/razorpay',
                component: ComponentCreator('/docs/karmapay/getting-started/razorpay', 'c6d'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/karmapay/getting-started/stripe',
                component: ComponentCreator('/docs/karmapay/getting-started/stripe', '56e'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/karmapay/working/workflow',
                component: ComponentCreator('/docs/karmapay/working/workflow', 'a6c'),
                exact: true,
                sidebar: "karmapay"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '7ef'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '2c8'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f0d'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'ca5'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '508'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'f90'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '489'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
