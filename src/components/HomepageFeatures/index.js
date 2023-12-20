import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '适合小白',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        详细讲解每一关键步，防止因简写略写而导致看不懂
        并且配有图片指引
      </>
    ),
  },
  {
    title: '快速准确',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        提供整理编写好的，最方便快捷的指南
        且每篇指南都经过测试，完全可用
      </>
    ),
  },
  {
    title: '更新迅速',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        根据最新的情况编写指南，防止因时间过久而导致失效
        并对已有指南进行及时更新
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
