import { FC } from "react";

interface GuideCardProps {
  difficulty: "Easy" | "Medium" | "Hard" | string;
  topic: string;
  title: string;
  description: string;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-[#1D67BC]",
  Medium: "bg-[#F69C1C]",
  Hard: "bg-[#50AF55]",
};

const GuideCard: FC<GuideCardProps> = ({
  difficulty,
  topic,
  title,
  description,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 hover:shadow-sm transition-all duration-200 bg-white w-full">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-normal text-gray-500 mb-4">
        <span
          className={`text-white px-2 py-0.5 rounded ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
        <span className="tracking-wide uppercase text-[#848484]">{topic}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#848484] leading-snug">{description}</p>
    </div>
  );
};

export default GuideCard;
