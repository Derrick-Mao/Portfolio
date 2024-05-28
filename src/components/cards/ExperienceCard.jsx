import { styles } from "../../styles";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="mb-5">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <h4 className="text-white text-[16px] italic">
        {experience.company_name}
      </h4>
      <ul className="mt-5 ml-5 mb-5 space-y-1 list-disc">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${styles.sectionSubText}`}
          >
            {point}
          </li>
        ))}
      </ul>
      <h4 className="text-white text-[16px] italic">{experience.date}</h4>
    </div>
  );
};

export default ExperienceCard;
