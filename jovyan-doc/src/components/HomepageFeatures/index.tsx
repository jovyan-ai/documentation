import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powerful Agents',
    emoji: '🤖',
    description: (
      <>
        Intelligent agents that plan, design, and execute complex data science tasks
        right inside your IDE. Automate multi-step workflows with ease.
      </>
    ),
  },
  {
    title: 'Data First',
    emoji: '📊',
    description: (
      <>
        Data and Jupyter notebooks are first-class citizens. Work seamlessly with
        DataFrames, visualizations, and data science workflows.
      </>
    ),
  },
  {
    title: 'Built-in Methodology',
    emoji: '🔄',
    description: (
      <>
        Follow industry-standard data science best practices automatically.
        Consistent, reproducible, and professional results every time.
      </>
    ),
  },
  {
    title: 'Team Collaboration',
    emoji: '👥',
    description: (
      <>
        Share workflows, enforce standards, and track team productivity.
        Perfect for data science teams of any size.
      </>
    ),
  },
  {
    title: 'Easy Onboarding',
    emoji: '⚡',
    description: (
      <>
        New data scientists can be productive in minutes. Learn best practices
        as you work with intelligent guidance and suggestions.
      </>
    ),
  },
  {
    title: 'Security & Compliance',
    emoji: '🔒',
    description: (
      <>
        SOC2 (in progress) and GDPR compliant. Your code and data stay secure
        with enterprise-ready privacy controls.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Why Jovyan AI?</Heading>
          <p className="hero__subtitle">
            Tailored to maximize data science team productivity
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
