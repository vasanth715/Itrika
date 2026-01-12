import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, description, icon: Icon, link }) => {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        p-8 
        shadow-xl 
        border 
        border-gray-200
        flex 
        flex-col 
        justify-between
        min-h-[320px]
      "
    >
      {/* ICON */}
      <div className="mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <Icon size={28} />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
        >
          Learn More <FaArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;