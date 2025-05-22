import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define data for statistics to enable mapping
const statistics = [
  {
    icon: "/industry-6.png",
    value: "15.15MTPA",
    label: "Installed Capacity",
  },
  {
    icon: "/revenue-1.png",
    value: "₹15,680 cr",
    label: "Revenue '24",
  },
  {
    icon: "/package-delivered-1.png",
    value: "2,500+",
    label: "Delivered Nationwide",
  },
  {
    icon: "/india-1.png",
    value: "7",
    label: "Pan-india Presence",
  },
];

// Define navigation items
const navItems = [
  { label: "ABOUT US", hasDropdown: true },
  { label: "BUSINESSES", hasDropdown: true },
  { label: "INVESTORS", hasDropdown: false },
  { label: "COMMUNITY", hasDropdown: true },
  { label: "SUSTAINBLITY", hasDropdown: true },
  { label: "CAREERS", hasDropdown: true },
  { label: "CONTACT US", hasDropdown: false },
];

export const HeroByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full">
      {/* Top bar */}
      <div className="relative w-full h-[57px] overflow-hidden">
        <div className="w-full h-[57px] bg-[#000000c9] backdrop-blur-[9.05px]">
          <div className="container mx-auto flex justify-between items-center h-full px-6">
            <div className="flex items-center space-x-4 opacity-[0.23]">
              <img className="h-[57px]" alt="Image" src="/left01.png" />
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-[510px] h-[57px]">
                <img
                  className="absolute w-[108px] h-[57px] top-0 left-0"
                  alt="Image"
                  src="/image-174.png"
                />
                <img
                  className="absolute w-[216px] h-[57px] top-0 left-[108px]"
                  alt="Image"
                  src="/mid.png"
                />
                <img
                  className="absolute w-[188px] h-[57px] top-0 left-[322px]"
                  alt="Image"
                  src="/right01.png"
                />
                <div className="absolute top-2 left-[15px] [font-family:'LEMON_MILK-Regular',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
                  <span className="text-white leading-5">
                    IN DEWARON MEIN
                    <br />
                  </span>
                  <span className="text-black leading-5">TIGER</span>
                  <span className="text-white leading-5"> REHTA HAI</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-1">
                <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm whitespace-nowrap">
                  Emploved Login
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <div className="relative flex items-center">
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Global icon"
                    src="/ri-global-line.svg"
                  />
                  <span className="ml-1 [font-family:'Inter',Helvetica] font-normal text-white text-xs text-center whitespace-nowrap">
                    Global (English)
                  </span>
                </div>
                <img
                  className="w-3.5 h-3.5"
                  alt="Down arrow"
                  src="/grommet-icons-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="relative w-full h-14 bg-app-primary backdrop-blur-[2.03px] z-10">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          <img className="h-[55px]" alt="Logo" src="/image-128-1.png" />

          <nav className="flex items-center">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center mx-4">
                <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-[13.2px] leading-[19.8px] whitespace-nowrap">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <img
                    className="w-[23px] h-[23px] ml-1"
                    alt="Dropdown"
                    src={`/group-${index + 4}.png`}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative h-14 rounded-[100px]">
              <div className="w-[216px] h-14 bg-[#ffffff47] rounded-[100px] overflow-hidden backdrop-blur-[2px] flex items-center px-7">
                <SearchIcon className="w-5 h-5 text-white" />
                <span className="ml-2 [font-family:'Inter',Helvetica] font-light text-[#ffffffa6] text-[15.3px]">
                  Search here...
                </span>
              </div>
            </div>

            <div className="w-14 h-14 bg-white rounded-[28px] overflow-hidden flex flex-wrap p-[15px] gap-[5px]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-[3px] ${
                    [0, 4, 8].includes(index)
                      ? "bg-gradient-to-r from-[rgba(238,116,29,1)] to-[rgba(252,176,64,1)]"
                      : "border border-solid border-[#ee741d]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero section with background image */}
      <div className="relative w-full h-[815px] bg-unnamed-color">
        <div className="relative w-full h-full">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url(..//image-1.png)] bg-cover bg-center">
            <div className="h-full w-full bg-[#1a202e4f]"></div>
          </div>

          {/* Hero content */}
          <div className="relative h-full flex flex-col items-center justify-center">
            <img
              className="w-[622px] h-[121px] mb-12"
              alt="Powering progress"
              src="/powering-progress-with-every-ton-.svg"
            />

            <Button className="h-[43px] px-[30px] py-[18.74px] rounded-[3.75px] border-[0.95px] border-solid border-[#ee741d] shadow-[0px_4.68px_14.05px_#252c6126,0px_1.87px_3.75px_#8890c233] bg-transparent">
              <span className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-[15.2px]">
                Explore More
              </span>
            </Button>

            {/* Statistics card */}
            <Card className="absolute bottom-[260px] w-[845px] h-[204px] bg-[#96969652] rounded-[7.01px] backdrop-blur-[7.75px] border-none">
              <CardContent className="p-0">
                <div className="flex justify-between items-end p-[51px] pt-[15px]">
                  {statistics.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[134.89px] items-center gap-[29.35px]"
                    >
                      <img
                        className="w-[84.15px] h-[84.15px] object-cover"
                        alt={stat.label}
                        src={stat.icon}
                      />
                      <div className="flex flex-col items-center gap-[28.66px] w-full">
                        <div className="w-full mt-[-0.70px] [font-family:'LEMON_MILK-Regular',Helvetica] font-normal text-white text-[26.6px] text-center leading-[11.2px]">
                          {stat.value}
                        </div>
                        <div className="w-full [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[12.6px] text-center leading-[11.2px]">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Carousel indicators */}
            <div className="absolute bottom-[250px] left-1/2 transform -translate-x-1/2 flex gap-[3.79px]">
              <div className="w-[18.95px] h-[5px] bg-[#ee741d] rounded-[4.74px]" />
              <div className="w-[18.95px] h-[5px] bg-white rounded-[4.74px]" />
              <div className="w-[18.95px] h-[5px] bg-white rounded-[4.74px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};