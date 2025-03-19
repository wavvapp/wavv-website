import Image from "next/image";

interface FeatureCardProps {
  feature: {
    image: string;
    title: string;
    description: string;
  };
  className?: string;
}

const FeatureCard = ({ feature, className }: FeatureCardProps) => (
  <div
    className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] min-h-[300px] ${className}`}
  >
    <Image
      src={feature.image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      fill
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative h-full p-6 md:p-4 sm:p-3 flex flex-col justify-end z-10">
      <h3 className="text-5xl md:text-5xl sm:text-3xl font-anton font-normal text-white tracking-tight mb-3 leading-7">
        {feature.title}
      </h3>
      <p className="text-white font-mono leading-5 line-clamp-3 sm:line-clamp-2">
        {feature.description}
      </p>
    </div>
  </div>
);

export default FeatureCard;
