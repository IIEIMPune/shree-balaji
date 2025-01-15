import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setProgress(40);
      console.log("Route change started: Progress set to 40");
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
      console.log("Route change completed: Progress set to 100");
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

      <LoadingBar
        color="#0195a1"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
        className="z-50"
      />

      <div className="bg-sky-50 min-h-screen">
        <Navbar />

  
        <div className="fixed hover:cursor-pointer bottom-24 z-50 right-5">
          <button onClick={handleScrollToTop}>
            <FaArrowCircleUp className="text-customRed rounded-full border-customBlue bg-customBlue" size={50} />
          </button>
        </div>

        <div className="fixed hover:cursor-pointer bottom-5 z-50 right-2">
          <Link href="https://wa.me/917499837102">
            <Image
              src="/images/whatsappimage.png"
              width={65}
              height={65}
              alt="WhatsApp"

            />
          </Link>
        </div>

        <Component {...pageProps} />

        <Footer />
      </div>
    </>
  );
}
