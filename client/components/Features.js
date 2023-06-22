import React from 'react';

import styles from './Features.module.scss';

import Card from './util/Card';
import UI from '../assets/UI.gif';
import install from '../assets/install.gif';
import dashboard from '../assets/dashboard.gif';

const Features = () => {
  return (
    <div className={styles.div} id='features'>
      <div className={styles.pad}>
        <div className={styles.container}>
          <Card>
            <img src={UI} className={styles.img} />
          </Card>
          <Card className={styles.card}>
            <p className={styles.p}>
              {' '}
              With the end-user in mind, Kubernét offers a welcoming page with
              responsive messaging and interactive features. The user experience
              is as frictionless as possible when implementing Kubernét in your
              workflow.
            </p>
          </Card>
        </div>

        <div className={styles.container}>
          <Card className={styles.card}>
            <p className={styles.p}>
              {' '}
              A "no-code" solution for integrating Prometheus and Grafana into
              your Kubernetes cluster. Kubernét will automatically install
              Prometheus and Grafana.
            </p>
          </Card>
          <Card>
            <img src={install} className={styles.img} />
          </Card>
        </div>

        <div className={styles.container}>
          <Card>
            <img src={dashboard} className={styles.img} />
          </Card>
          <Card className={styles.card}>
            <p className={styles.p}>
              {' '}
              Track the vital metrics in your Kubernetes cluster. Kubernét
              offers a customizable dashboard that visualizes the metrics in
              your cluster.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
