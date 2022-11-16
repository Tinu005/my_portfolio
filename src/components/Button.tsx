import {Facts} from '../constants';
import styles from '../style';

const Button = () => (
    <section id="facts" className={`${styles.flexCenter}
    flexrow flex-wrap sm:mb-20 mb-6`}>
      {Facts.map((fact) => (
      <div key={fact.id} className={`flex-grow-1 justify-content flex flex-col 
        items-center flex-row m-4`}>
        <h4 className="font-poppins font-semibold
        xs:text-[40px] text-[30px] xs:leading-[53px]
        leading-[43px] text-white">{fact.value}</h4>
        <p className="font-poppins font-normal
        xs:text-[20px] text-[15px] xs:leading-[26px]
        leading-[21px] text-gradient uppercase">{fact.title}</p>
      </div>
    ))}
    </section>
)

export default Button