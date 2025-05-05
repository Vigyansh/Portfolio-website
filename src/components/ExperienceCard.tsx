import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 mb-8">
      <div className="flex flex-wrap items-center mb-2">
        <h3 className="text-xl font-bold mr-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <span className="text-blue-600 dark:text-blue-400 font-medium">
          @ {company}
        </span>
      </div>

      <div className="flex flex-wrap text-gray-600 dark:text-gray-400 mb-4 text-sm">
        <div className="flex items-center mr-4">
          <FaCalendarAlt className="mr-1" />
          <span>{period}</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <span>{location}</span>
        </div>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        {description.map((item) => (
          <li key={item.substring(0, 20)} className="text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
