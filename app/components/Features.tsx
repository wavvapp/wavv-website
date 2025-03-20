import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-full min-h-screen px-16 py-20 md:h-screen bg-white flex items-center justify-center">
      <div className="w-full">
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 w-full">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className="aspect-square"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full md:hidden lg:grid">
          <FeatureCard
            feature={features[0]}
            className="aspect-square lg:row-span-2"
          />

          <div className="grid grid-cols-1 lg:grid-rows-2 gap-4 h-full">
            <FeatureCard
              feature={features[1]}
              className="aspect-square lg:aspect-auto lg:h-full"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
              {features.slice(2, 4).map((feature, index) => (
                <FeatureCard
                  key={index + 2}
                  feature={feature}
                  className="aspect-square"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
