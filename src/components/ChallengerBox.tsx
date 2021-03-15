import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengerBox.module.css";

export function ChallengerBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengerBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengerActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              className={styles.challengerFailedButton}
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              className={styles.challengerSucceededButton}
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengerNotActive}>
          <strong>Inicie um ciclo para receber para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios
          </p>
        </div>
      )}
    </div>
  );
}
