"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.apeunit.wavv.app";
const APP_STORE_LINK =
  "https://apps.apple.com/us/app/wavv-link-up-offline/id6738583772?platform=iphone";

export default function DeepLinkHandler() {
  const searchParams = useSearchParams();
  const params = useParams();
  const [redirected, setRedirected] = useState(false);

  const handleDeepLink = useCallback(() => {
    if (typeof window === "undefined") return;
    if (redirected) return;

    const screen = params?.params?.[0] || searchParams.get("screen") || "Home";
    const userId = searchParams.get("userId");

    const queryParams = userId ? `?userId=${userId}` : "";

    const deepLink = `wavv://${screen}${queryParams}`;

    const a = document.createElement("a");
    a.href = deepLink;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setRedirected(true);

    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const userAgent = navigator.userAgent || window.opera;

      console.log({ userAgent });
      if (/android/i.test(userAgent)) {
        window.location.href = PLAY_STORE_LINK;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = APP_STORE_LINK;
      } else {
        window.location.href = PLAY_STORE_LINK;
      }
    }, 1500);
  }, [params, searchParams, redirected]);

  useEffect(() => {
    handleDeepLink();
  }, [handleDeepLink]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Opening Wavv App</h1>
      </div>
    </div>
  );
}
