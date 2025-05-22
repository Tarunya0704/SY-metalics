import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterByAnima = (): JSX.Element => {
  // Links data for mapping
  const usefulLinks = [
    { name: "About Us", column: 1 },
    { name: "Projects", column: 2 },
    { name: "Careers", column: 1 },
    { name: "Blog", column: 2 },
    { name: "Privacy Policy", column: 1 },
    { name: "Services", column: 2 },
    { name: "Pricing", column: 1 },
    { name: "Team", column: 2 },
    { name: "Contact", column: 1 },
    { name: "Terms of use", column: 2 },
  ];

  return (
    <footer className="relative w-full bg-[#cccccc] border-t-[0.76px] border-b-[0.76px] border-[#ffffff1a]">
      <div className="relative w-full">
        <div className="absolute w-full h-[413px] top-0 left-0">
          <img
            className="w-full h-full object-cover"
            alt="Background"
            src="/image-9.png"
          />
        </div>

        <div className="relative flex flex-row">
          {/* First column */}
          <div className="w-[410px] py-10 px-[76px] border-r-[0.76px] border-[#ffffff1a] relative">
            <img
              className="w-[170px] h-20 -ml-2 object-cover"
              alt="Logo"
              src="/image-128-1.png"
            />

            <p className="mt-[79px] font-['Space_Grotesk',Helvetica] text-black text-[16.1px] leading-[28.4px]">
              It was popularised in the 1960s with the
              <br />
              release of Letraset sheets containing Lorem
              <br />
              Ipsum passages, and more recently works.
            </p>

            <div className="mt-8 font-['Space_Grotesk',Helvetica] font-bold text-[#1f1f1f] text-4xl leading-[45px] [-webkit-text-stroke:0.95px_#ee741d]">
              Since 2007
            </div>

            <div className="mt-8 flex">
              <span className="font-['Space_Grotesk',Helvetica] text-black text-[16.1px] leading-[28.4px]">
                © 2025 Industrie. Designed by
              </span>
              <span className="font-['Space_Grotesk',Helvetica] text-[#ee741d] text-[16.1px] leading-[28.4px] ml-1">
                Webisdom
              </span>
            </div>
          </div>

          {/* Second column */}
          <div className="w-[410px] py-10 px-7 border-r-[0.76px] border-[#ffffff1a]">
            <h3 className="font-['Space_Grotesk',Helvetica] font-bold text-black text-[22.7px] leading-[31.8px] mb-12">
              Useful Links
            </h3>

            <div className="grid grid-cols-2 gap-y-[46px] gap-x-[125px]">
              {usefulLinks.map((link, index) => (
                <div
                  key={index}
                  className="font-['Space_Grotesk',Helvetica] font-medium text-black text-[17px] leading-[25.6px] cursor-pointer"
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

          {/* Third column */}
          <div className="w-[410px] py-10 px-7">
            <h3 className="font-['Space_Grotesk',Helvetica] font-bold text-black text-[22.7px] leading-[31.8px] mb-12">
              Newsletter
            </h3>

            <p className="font-['Space_Grotesk',Helvetica] text-black text-[16.1px] leading-[28.4px] mb-11">
              Subscribe for the latest news. Stay updated on
              <br />
              the latest trends industrie.
            </p>

            <Input
              className="h-[57px] rounded-[1.89px] border-[0.95px] border-[#ffffff1a] font-['Space_Grotesk',Helvetica] font-medium text-black text-[15.1px] px-6 mb-6"
              placeholder="Enter Your Email"
            />

            <Button className="w-[214px] h-[57px] bg-[#ee741d] rounded-[1.89px] font-['Space_Grotesk',Helvetica] font-medium text-white text-[17px] hover:bg-[#d66a1b]">
              <span>Subscribe Now</span>
              <img className="w-4 h-4 ml-2" alt="Arrow" src="/svg.svg" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
