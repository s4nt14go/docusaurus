import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Civic SIP',
    Svg: require('../../static/img/civic-sip.svg').default,
    description: (
      <>
        Secure Identity Platform (SIP)
      </>
    ),
    link: 'docs/sip/seccion1',
  },
  {
    title: 'Civic Pass',
    Svg: require('../../static/img/civic-pass.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link: 'docs/civic-pass/civic-pass-solution',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--5')}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title}/>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row ` + styles.justify}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
