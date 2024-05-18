import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './index.module.css';

const features = [
  {
    title: <>Free and Easy to Use</>,
    imageUrl: "img/undraw_watch_application.png",
    description: (
      <>
        Building occupants can complete a right-here-right-now survey directly
        from their Fitbit watch. Without the need of having to open an app on
        their Phone or a survey link.
      </>
    ),
  },
  {
    title: <>Open Source</>,
    imageUrl: "img/undraw_dev_productivity_umsq.png",
    description: (
      <>
        Cozie is an open-source project and together with{" "}
        <a href={"https://cozie-apple.app"}>Cozie Apple</a>, allows researchers to
        focus on the data collection. We have taken care of all the programming
        for you!
      </>
    ),
  },
  // {
  //   title: <>Open Source</>,
  //   imageUrl: "img/undraw_dev_productivity_umsq.png",
  //   description: (
  //     <>
  //       Cozie is an Open Source project and together with{" "}
  //       <a href={"https://cozie-apple.app"}>Cozie Apple</a>, allows researchers to
  //       focus on the data collection. We have taken care of all the programming
  //       for you!
  //     </>
  //   ),
  // }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx(
        "avatar avatar--vertical col col--6 text--center",
        styles.features
      )}
    >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const contributors = [
  {
    name: <>Prageeth Jayathissa</>,
    imageUrl: "img/pjjayasthissa.jpeg",
    role: <>Lead developer</>,
    profession: <>Senior Sustainabilit Partner at Vector Limited</>,
    link: "https://www.linkedin.com/in/pjayathissa/",
  },
  {
    name: <>Federico Tartarini</>,
    imageUrl: "img/federico.jpg",
    role: <>Developer, UI design, Back End</>,
    profession: <>Postdoctoral scholar at SinBerBEST</>,
    link: "https://federicotartarini.github.io",
  },
  {
    name: <>Kairat Talantbekov</>,
    imageUrl: "img/kairat.jpeg",
    role: <>Front End</>,
    profession: <>Node.js Software Engineer</>,
    link: "https://www.linkedin.com/in/kairat-talantbekov/",
  },
  {
    name: <>Matias Quintana</>,
    imageUrl: "img/matiasquintana.png",
    role: <>Back End</>,
    profession: <>Ph.D Candidate at NUS</>,
    link: "https://www.linkedin.com/in/matiasqr/",
  },
  {
    name: <>Tapeesh Sood</>,
    imageUrl: "img/tapeesh.png",
    role: <>UI design</>,
    profession: <>Product at Saltmine</>,
    link: "https://www.linkedin.com/in/tapeeshsood/",
  },
  {
    name: <>Clayton Miller</>,
    imageUrl: "img/clayton.png",
    role: <>Project coordinator and supervisor</>,
    profession: <>Assistant Professor at NUS</>,
    link: "https://www.linkedin.com/in/claytonmiller/",
  },
  {
    name: <>Pierre Garreau</>,
    imageUrl: "img/pierregarreau.png",
    role: <>UI/IX Developer</>,
    profession: <>Engineering student at Mines, France</>,
    link: "https://www.linkedin.com/in/pierregarreau/",
  },
];

function Contributor({ imageUrl, name, profession, role, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx(
        "avatar avatar--vertical col col--3 text--center",
        styles.features
      )}
    >
      <img
        className="avatar__photo avatar__photo--xl"
        src={imgUrl}
        alt={name}
      />
      <a className="avatar__intro" href={link}>
        <h4 className="avatar__name">{name}</h4>
        <small className="avatar__subtitle">{profession}</small>
        <small className="avatar__subtitle">{role}</small>
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Cozie - A Fitbit clock face for indoor environmental quality satisfaction and physiological data collection."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col", styles.profileImgContainer)}>
              <img
                alt="Cozie main question"
                className={styles.mainImage}
                src={"img/cozieHomescreen.png"}
              />
            </div>
            <div className={clsx("col", styles.profileHeroContainer)}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <a className={clsx("button button--outline button--active button--secondary button--lg margin--sm")}
                href={"docs/picking-a-fitbit"}>
                Download Cozie
              </a>
              <a className={clsx("button button--outline button--active button--secondary button--lg margin--sm")}
                href={"https://github.com/cozie-app/cozie/discussions"}>
                Forum
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>    
      <section className={clsx(styles.features, styles.notice)}>
          <div className="container">
            <div className="row" >
                <p>
                  Please note that Google has made the decision to remove third-party apps and clocks from the Fitbit app gallery for users in the European Economic Area in June 2024. Users in other countries will not be impacted. (<a href="https://support.google.com/fitbit/answer/14237121?hl=en">Source</a>) <br/>
                  In addition the most current Fitbit devices, e.g., Sense 2, Versa 4 do not support third-party apps and clocks.<br/><br/>
                  Cozie Fitbit is such a third-party app.
                  Hence, we have decided to stop the support of Cozie Fitbit. <br/>
                  As an alternative, we recommend using <a href="https://cozie-apple.app/">Cozie Apple</a>.
                </p>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3")}>
                <img
                  alt="cozie main question"
                  className={styles.mainImage}
                  src={"img/iphone.png"}
                />
              </div>
              <div className={clsx("col col--9")}>
                <h1 className="hero__title">Taylor your survey</h1>
                <p className="hero__subtitle">
                  Choose which questions to show to the study participants
                </p>
                <img
                  alt="Cozie flow of questions"
                  src={"img/flow.png"}
                />
              </div>
            </div>
          </div>
        </section>
        <hr />
        {contributors && contributors.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1>Developed and designed by:</h1>
              <div className="row">
                {contributors.map((props, idx) => (
                  <Contributor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <hr />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
                <p>
                  Please cite us as <br/>
                  <a href="https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012145">
                    Prageeth Jayathissa, Matias Quintana, Tapeesh Sood and Negin Nazarian, Clayton Miller (2019) Is your clock-face cozie? A smartwatch methodology for the in-situ collection of occupant comfort data
                  </a>
                </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;