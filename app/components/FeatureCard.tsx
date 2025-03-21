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
    className={`relative rounded-2xl overflow-hidden flex transition-transform hover:scale-[1.02] ${className}`}
  >
    <Image
      src={feature.image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      fill
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative xl:h-[80%] md:h-[90%] mt-auto p-6 flex flex-col justify-end z-10 max-w-[33rem] w-full">
      <h3 className="text-3xl md:text-4xl lg:text-2xl xl:text-5xl font-anton font-normal text-white tracking-tight mb-3 overflow-hidden text-ellipsis">
        {feature.title}
      </h3>
      <p className="text-normal md:text-xl lg:text-base xl:text-normal text-white font-mono leading-[1.2rem] overflow-hidden">
        {feature.description}
      </p>
    </div>
  </div>
);

export default FeatureCard;
