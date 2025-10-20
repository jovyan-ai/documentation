import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installing',
        'getting-started/setting-up',
        'getting-started/your-first-task',
        'getting-started/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'core-features/create-and-execute-tasks',
        'core-features/configure-ai-agent',
        'core-features/context-management',
      ],
    },
    {
      type: 'category',
      label: 'Using Jovyan AI',
      items: [
        'using-jovyan/chatting-with-jovyan',
        'using-jovyan/using-modes',
        'using-jovyan/context-mentions',
        'using-jovyan/api-provider-configuration',
        'using-jovyan/tools',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/agents',
        'core-concepts/data-science-methodology',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/overview',
        'features/powerful-agents',
        'features/data-first',
        'features/workflows',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'advanced/custom-workflows',
        'advanced/team-collaboration',
      ],
    },
    {
      type: 'category',
      label: 'Customization',
      items: [
        'customization/settings',
        'customization/custom-rules',
      ],
    },
    'faq',
  ],
};

export default sidebars;
