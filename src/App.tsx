import styles from './style';
import {Navbar , Aboutme, Button, Footer, Main, Projects}from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
      <div className={'${styles.bowWidth}'}>
        <Navbar />
      </div>
    </div>

    <div className={'bg-primary ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        <Main />
      </div>
    </div>
    <div className={'bg-primary ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        <Button />
      </div>
    </div>
    <div className={'bg-primary ${styles.paddingX${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        <Projects />
        <Aboutme />
        <Footer />
      </div>
    </div>
  </div>
);


export default App
