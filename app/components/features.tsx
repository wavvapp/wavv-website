import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-full min-h-screen px-16 py-20 md:h-screen bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <FeatureCard
          feature={features[0]}
          className="aspect-square md:row-span-2"
        />

        <div className="grid grid-cols-1 md:grid-rows-2 gap-4 h-full">
          <FeatureCard
            feature={features[1]}
            className="aspect-square md:aspect-auto md:h-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureCard
                key={index + 2}
                feature={feature}
                className="aspect-square md:aspect-auto md:h-full" // Remove aspect-square on tablet
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
