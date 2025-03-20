import Image from "next/image";
import Link from "next/link";

export function Download() {
  return (
    <section className="flex items-center justify-center py-16 bg-black text-white h-screen">
      <div className="flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col gap-6 leading-7">
          <h1 className="font-anton text-5xl">Try it out now!</h1>
          <span className="font-mono text-xl">
            Join the wave of IRL social.
            <br /> Link up, offline
          </span>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mt-4">
          <Link
            href={
              "https://apps.apple.com/us/app/wavv-link-up-offline/id6738583772"
            }
            className="cursor-pointer hover:scale-[1.2] transition-transform duration-300 ease-in-out"
          >
            <Image
              src={"/images/apple_store.png"}
              alt={"apple store icons"}
              height={59}
              width={176.78}
            />
          </Link>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.apeunit.wavv.app"
            }
            className="cursor-pointer hover:scale-[1.2] transition-transform duration-300 ease-in-out"
          >
            <Image
              src={"/images/google_playstore.png"}
              alt={"google playStore icons"}
              height={89.1}
              width={230}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
