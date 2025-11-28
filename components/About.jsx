import Head from "next/head";
import Image from "next/image";

const Orbit = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Modern restroom cubicle solutions..."
        />
      </Head>

      <section
        data-aos="fade-down"
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323987/bg-wavedown_biey7u.png)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-5 py-11 md:py-0">
          {/* Section Title */}
          <h2 className="mt-1 font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-2 text-[#2548BD]">
            About Us
          </h2>
          <div className="mx-auto mb-6 mt-3 h-1 w-12 sm:w-16 bg-blue-600"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[50vh] sm:min-h-[60vh] gap-10">
            {/* Left Content */}
            <div className="text-gray-800 text-center lg:text-left">
              <h2 className="font-bold text-blue-600 text-xl sm:text-2xl md:text-3xl mb-3">
                Promozione-Branding
              </h2>
              <h5 className="mb-3 text-base sm:text-lg font-medium">
                A Global Digital Marketing Firm Dedicated to Your Success
              </h5>
              <p className="mb-3 text-sm sm:text-base">
                Promozione Branding is a leading digital marketing firm helping
                businesses worldwide achieve real results. From{" "}
                <strong>SEO, PPC, Social Media Marketing</strong>, to{" "}
                <strong>Web Development</strong>, we drive growth, quality
                leads, and a stronger online presence.
              </p>
              <p className="mb-3 text-sm sm:text-base">
                With <strong>100+ experts</strong> and over a decade of
                experience, we deliver measurable ROI across global markets.
              </p>
              <p className="text-sm sm:text-base">
                Whether you’re a startup or an established brand, our{" "}
                <strong>client-first strategies</strong> help you expand beyond
                borders and achieve sustainable digital growth.
              </p>
              <p className="text-sm sm:text-base">
                At Promozione Branding, we take a{" "}
                <strong>client-first approach</strong> — every campaign is
                customized to your unique goals, ensuring long-term success and
                sustainable digital growth worldwide. Partner with us to scale
                your business across <strong>international markets</strong> and
                dominate your industry online.
              </p>
            </div>

            {/* Right Orbit */}
            <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              {/* Central Logo */}
              <div className="absolute z-10 text-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] mx-auto flex items-center justify-center rounded-full bg-white shadow-lg">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323987/logoo_kf5otr.webp"
                    alt="Logo"
                    width={110}
                    height={110}
                    className="rounded-full"
                  />
                </div>
                <div className="text-red-600 mt-2 font-bold text-sm sm:text-base">
                  Branding
                </div>
                <div className="text-gray-500 font-semibold text-xs sm:text-sm">
                  Driving Innovation Across India
                </div>
              </div>

              {/* Orbit Rings with Icons */}
              {/* Orbit 1 */}
              <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]">
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324052/facebook_jkmi7d.webp"
                    alt="Facebook Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div>

              {/* Orbit 2 */}
              <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[220px] h-[220px] sm:w-[300px] sm:h-[300px]">
                <div className="absolute top-[20%] -right-[25px] sm:-right-[37px] -translate-y-1/2">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324056/youtube_mlov1p.webp"
                    alt="YouTube Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div>

              {/* Orbit 3 */}
              <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]">
                <div className="absolute -bottom-[20px] sm:-bottom-[25px] left-1/2 -translate-x-1/2">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324052/instagram_brwdlw.webp"
                    alt="Instagram Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div>

              {/* Orbit 4 */}
              <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <div className="absolute bottom-[20%] right-[15px] sm:right-[25px] translate-x-1/2">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324055/semrush_u5nlxr.webp"
                    alt="Semrush Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div>

              {/* Extra Icons */}
              <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <div className="absolute top-[55%] -left-[20px] sm:-left-[25px] -translate-y-1/2">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324055/search_pjxqma.webp"
                    alt="Business Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div>

              {/* <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]">
                <div className="absolute top-[50%] left-[10%] sm:left-[15%]">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324051/ahrefs_capuvi.webp"
                    alt="Ahrefs Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div> */}

              <div className="absolute border border-[#d7d0e7] rounded-full animate-orbit w-[220px] h-[220px] sm:w-[300px] sm:h-[300px]">
                <div className="absolute -bottom-[20px] sm:-bottom-[25px] right-[15%] sm:right-[20%] translate-y-1/2">
                  <Image
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762324051/business_esortb.webp"
                    alt="Console Icon"
                    width={45}
                    height={45}
                    className="rounded-full shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orbit;
