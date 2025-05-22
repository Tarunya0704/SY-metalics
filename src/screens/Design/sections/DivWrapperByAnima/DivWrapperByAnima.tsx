import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  // Timeline data for mapping
  const timelineItems = [
    { year: "1848", image: "/image-162.png", hasSpecialStyle: true },
    { year: "1902", image: "/image-161.png", hasSpecialStyle: false },
    { year: "1964", image: "/image-163.png", hasSpecialStyle: false },
    { year: "1998", image: "/image-164.png", hasSpecialStyle: false },
    { year: "2008", image: "/image-165.png", hasSpecialStyle: false },
    { year: "2023", image: "", hasSpecialStyle: false },
  ];

  // List items for the small card
  const listItems = ["Lorem Ipsum", "dollar sit", "lorem", "ipsujias"];

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="relative w-full max-w-[1461px] mx-auto">
        {/* Main content section */}
        <div className="relative flex flex-wrap">
          {/* Left content */}
          <div className="relative w-full lg:w-[650px] px-6 md:px-[91px]">
            <span className="block [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-app-primary text-2xl tracking-[4.30px] leading-[30.0px] mb-4">
              About Us
            </span>

            <h2 className="[font-family:'LEMON_MILK-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[50.4px] mb-8">
              How We Started
            </h2>

            <h3 className="[font-family:'Manrope',Helvetica] text-black text-2xl leading-[40.0px] font-normal tracking-[0] mb-4">
              Lorem Ipsum
            </h3>

            <p className="[font-family:'Manrope',Helvetica] font-light text-black text-lg tracking-[0] leading-[30.0px] mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit
              <br />
              voluptatem accusantium doloremque laudantium,
              <br />
              totam rem aperiam, eaque ipsa quae ab illo
              <br />
              inventore veritatis et quasi.
            </p>

            {/* Small card with list */}
            <Card className="w-[115px] h-[125px] bg-[#f6f6f7] rounded-none border-none shadow-none">
              <CardContent className="p-3.5">
                <ul className="flex flex-col gap-[4.26px]">
                  {listItems.map((item, index) => (
                    <li
                      key={index}
                      className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[13px] tracking-[0] leading-[13px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right side images */}
          <div className="relative flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-[296px] h-[605px] bg-[url(/home-image-1-jpg.png)] bg-cover bg-[50%_50%]" />
            <div className="w-full lg:w-[487px] h-[554px] bg-[url(/timeline-tab-img-2-png.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>

        {/* Timeline section */}
        <div className="relative w-full mt-16 border-b-[2.8px] border-[#f48120] pb-14">
          <div className="flex justify-between px-4 md:px-[183px] lg:px-[183px] relative">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="[font-family:'LEMON_MILK-Bold',Helvetica] font-bold text-[#ffaa4a] text-lg text-center tracking-[4.30px] leading-[18px] whitespace-nowrap mb-6">
                  {item.year}
                </div>

                {item.hasSpecialStyle ? (
                  <div className="relative w-[49px] h-[49px] rounded-[21px] [background:linear-gradient(180deg,rgba(255,170,74,1)_0%,rgba(230,97,63,1)_100%)]">
                    <img
                      className="absolute w-10 h-10 top-[5px] left-1.5 object-cover"
                      alt={`Timeline icon for ${item.year}`}
                      src={item.image}
                    />
                  </div>
                ) : (
                  <div className="relative w-6 h-6 bg-[#d9d9d9] rounded-xl">
                    {item.image && (
                      <img
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                        style={{
                          width:
                            item.year === "1902" || item.year === "2008"
                              ? "9px"
                              : "13px",
                          height:
                            item.year === "1902" || item.year === "2008"
                              ? "9px"
                              : "13px",
                        }}
                        alt={`Timeline icon for ${item.year}`}
                        src={item.image}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
