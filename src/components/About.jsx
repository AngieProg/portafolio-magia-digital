import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({service, index}) => {
  return (
    <Tilt className="xs:w-[500px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[600px] flex justify-evenly items-center flex-col"
        >
          <img src={service.icon} alt="title"  className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center mt-5">{service.title}</h3>
          <p className="text-white text-[18px] font-bold text-center mt-5">{service.precio}</p>
          <ul className="mt-5 list-disc space-y-3 text-[15px]">
            {service.especificaciones.map((especificacion, index) => (
              <li
                key={`service-especificacion-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {especificacion}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Elige tu mejor opción</p>
        <h2 className={styles.sectionHeadText}>Paquetes</h2>
      </motion.div>

      {/* <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")