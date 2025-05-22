import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const LocationByAnima = (): JSX.Element => {
  // Statistics data for the top card
  const statsData = [
    { title: "Clients", value: "12K" },
    { title: "Annual growth", value: "55%" },
    { title: "No of projects", value: "5k" },
    { title: "Positive ratings", value: "80%" },
  ];

  // Location statistics data
  const locationStats = [
    {
      value: "82+",
      label: "countries",
      subLabel: "Footprint",
      iconSrc: "/group.png",
    },
    {
      value: "09",
      label: "Manufacturing",
      subLabel: "facilities worldwide",
      iconSrc: "/group-1.png",
    },
    {
      value: "27",
      label: "Manufacturing",
      subLabel: "units in India",
      iconSrc: "/group-2.png",
    },
  ];

  // Manufacturing locations
  const manufacturingLocations = [
    { top: "358px", left: "921px" },
    { top: "358px", left: "981px" },
    { top: "302px", left: "959px" },
    { top: "431px", left: "1052px" },
    { top: "458px", left: "943px" },
  ];

  return (
    <section className="relative w-full py-16 px-8">
      <h2 className="text-2xl font-medium text-[#ee741d] mb-14 font-['Helvetica_Neue-Medium',Helvetica] leading-6">
        Locations
      </h2>

      <div className="w-full">
        {/* Stats Card */}
        <Card className="w-full mb-16 bg-[#f7f7f5] border-none rounded-[10.89px]">
          <CardContent className="flex items-center justify-center gap-[65.35px] px-[43.57px] py-[21.78px]">
            {statsData.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="inline-flex flex-col items-center justify-center gap-[10.89px]">
                  <div className="mt-[-1.09px] font-semibold text-neutral-800 text-[26.1px] text-center font-['Poppins',Helvetica] leading-normal">
                    {stat.title}
                  </div>
                  <div className="font-h2-bold font-[number:var(--h2-bold-font-weight)] text-[#ee741d] text-[length:var(--h2-bold-font-size)] tracking-[var(--h2-bold-letter-spacing)] leading-[var(--h2-bold-line-height)] whitespace-nowrap [font-style:var(--h2-bold-font-style)]">
                    {stat.value}
                  </div>
                </div>
                {index < statsData.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-[43.57px] bg-[#ee741d] rounded-[1.09px] w-[1.09px]"
                  />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>

        <div className="relative flex">
          {/* Left side stats */}
          <div className="relative w-[123px] mr-24">
            {locationStats.map((stat, index) => (
              <div key={index} className="mb-12">
                <div className="relative h-10">
                  <div className="absolute w-[66px] h-10">
                    <div className="absolute w-auto h-7 [font-family:'Montserrat',Helvetica] font-extrabold text-[#ee741d] text-[23.1px] leading-[23.1px]">
                      {stat.value}
                    </div>
                    <div className="absolute w-auto h-3.5 top-[26px] [font-family:'Montserrat',Helvetica] font-medium text-black text-[13.8px] leading-[13.8px] whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute w-[18px] h-[17px] top-1.5 left-[calc(0.75rem_+_1.5rem)]">
                    <img
                      className="absolute w-4 h-[15px] top-px left-px"
                      alt="Icon"
                      src={stat.iconSrc}
                    />
                  </div>
                </div>
                <div className="mt-1 [font-family:'Montserrat',Helvetica] font-medium text-black text-[9.2px] leading-[11.1px] whitespace-nowrap">
                  {stat.subLabel}
                </div>
              </div>
            ))}

            <Button className="w-[187px] h-[45px] bg-app-primary rounded-[3.96px] shadow-[0px_4.95px_14.84px_#252c6126,0px_1.98px_3.96px_#8890c233] text-white font-['Helvetica_Neue-Bold',Helvetica] font-bold text-base leading-[16px]">
              View Global Presence
            </Button>
          </div>

          {/* Map section */}
          <div className="relative flex-1">
            <div className="absolute w-[769px] h-[378px] bg-[url(/group-1000003285.png)] bg-[100%_100%]" />

            <img
              className="absolute w-[516px] h-[516px] top-[-66px] left-[692px] object-cover"
              alt="Vector black"
              src="/vector-black-halftone-dotted-india-map-illustration-vector-1.png"
            />

            {manufacturingLocations.map((location, index) => (
              <img
                key={index}
                className={`absolute w-[22px] h-[22px] top-[${location.top}] left-[${location.left}] object-cover`}
                alt="Industry"
                src="/industry-6.png"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
