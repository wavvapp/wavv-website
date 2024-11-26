interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

export function Features() {
  const features: FeatureCard[] = [
    {
      title: "Know Who's Going Out",
      description: "Stop wondering who's available. Get a overview of which friends are free and what they're planning today.",
      image: "/images/wavv_img_01.png"
    },
    {
      title: "Let Friends Know You're Free",
      description: "Signal your availability with a single tap and show friends you're up for hanging out today.",
      image: "/images/wavv_img_02.png"
    },
    {
      title: "Control Who Sees Your Plans",
      description: "Choose who sees your availability. Share with everyone, specific friend groups, or specific friends.",
      image: "/images/wavv_img_03.png"
    },
    {
      title: "Make Meetups Effortless",
      description: "No more endless chats to figure out when to do what. Just tap to share your activity ideas, time, and location.",
      image: "/images/wavv_img_04.png"
    }
  ]

  return (
    <section className="w-full min-h-screen py-16 md:h-screen bg-white p-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full">
        <div className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] aspect-square md:row-span-2`}>
          <img 
            src={features[0].image} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative h-full p-8 flex flex-col justify-end z-10">
            <div>
              <h3 className="text-3xl font-medium text-white tracking-tight mb-3">
                {features[0].title}
              </h3>
              <p className="text-white font-mono">
                {features[0].description}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-rows-2 gap-4 h-full">
          <div className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] aspect-square md:aspect-auto md:h-full`}>
            <img 
              src={features[1].image} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative h-full p-8 flex flex-col justify-end z-10">
              <div>
                <h3 className="text-3xl font-medium text-white tracking-tight mb-3">
                  {features[1].title}
                </h3>
                <p className="text-white font-mono">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {[2, 3].map((index) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] aspect-square`}>
                <img 
                  src={features[index].image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative h-full p-8 flex flex-col justify-end z-10">
                  <div>
                    <h3 className="text-3xl font-medium text-white tracking-tight mb-3">
                      {features[index].title}
                    </h3>
                    <p className="text-white font-mono">
                      {features[index].description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

