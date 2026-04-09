import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quick-start/installing',
        'quick-start/create-account',
        'quick-start/your-first-task',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/working-with-tasks',
        'features/notebooks',
        'features/modes-ai-agent',
        'features/context-mentions',
        'features/code-actions',
        'features/slash-commands',
      ],
    },
    {
      type: 'category',
      label: 'Customization',
      items: [
        'customization/settings',
        'customization/custom-modes',
        'customization/rules-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/plans-billing',
        'reference/keyboard-shortcuts',
        'reference/concepts',
        'reference/troubleshooting',
        'reference/faq',
      ],
    },
  ],
};

export default sidebars;
