import styles from "../styles/components/ChallengerBox.module.css";

export function ChallengerBox() {
  const hasActiveChallenger = true;
  return (
    <div className={styles.challengerBoxContainer}>
      {hasActiveChallenger ? (
        <div className={styles.challengerActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <button className={styles.challengerFailedButton} type="button">
              Falhei
            </button>

            <button className={styles.challengerSucceededButton} type="button">
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
