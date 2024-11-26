import Scene from './waveshader'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Scene />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/wavv_logotype.svg"
              alt="WAVV"
              width={400}
              height={170}
              priority
            />
          </div>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-mono tracking-tight">
            Signal friends your availability. Stay connected effortlessly with your circle through simple, intuitive status sharing.
          </p>
        </div>
      </div>
    </section>
  )
}

