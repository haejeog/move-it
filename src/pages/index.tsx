import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import { ChallengerBox } from "../components/ChallengerBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | MoveIT</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengerBox />
        </div>
      </section>
    </div>
  );
}
