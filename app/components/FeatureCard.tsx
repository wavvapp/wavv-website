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
    className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] ${className}`}
  >
    <Image
      src={feature.image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      fill
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative h-full p-6 flex flex-col justify-end z-10">
      <h3 className="text-5xl font-anton font-normal text-white tracking-tight mb-3">
        {feature.title}
      </h3>
      <p className="text-white font-mono leading-5">{feature.description}</p>
    </div>
  </div>
);

export default FeatureCard;
