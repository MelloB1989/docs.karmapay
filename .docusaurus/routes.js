import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '916'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5d1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '247'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '240'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e1d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5f5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f90'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1c0'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '943'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '41b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e64'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '491'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '91e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ff8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd24'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3bd'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '83c'),
            routes: [
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
    component: ComponentCreator('/', '241'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
