import styles from '../style';
import { pianoboi } from '../assets';
const Aboutme = () => (
  <section id="aboutme" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mx-6`}>
    <div>
      <h2 className={styles.heading2}>
        About Me
      </h2>
      <p className={`font-poppins font-normal text-dimWhite text-[13px] leading-[30.8px] max-w[500] mt-5`}>
      I am a Second Year Mcmaster University student excited to enter into the workforce as I pursue post-secondary education. I am enthusiastic about furthering my people skills and look forward to becoming an excellent member of society.
      A hard worker and dedicated team player are just some of the few skills I have in my reservoir, I am proficient in most Microsoft applications as well as their google counterparts. Intermediate understanding of coding in the language JavaScript, Python, ReactJs, C and html.
      In my spare time I play the piano, sing and play a sports like basketball and volleyball. I've worked as a Tutor, Barist, Bar-tender and a cashier. I am from South Asia and I am fluent in English, French and Malayalam.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <img src={pianoboi} alt="ruhroh"
      className="max-w-[700] w-[] h-auto"/>
    </div>
  </section>
)

export default Aboutme