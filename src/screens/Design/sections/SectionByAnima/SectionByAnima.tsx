import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionByAnima = (): JSX.Element => {
  // Contact information data for mapping
  const contactCards = [
    {
      id: 1,
      icon: "/mask-group.svg",
      title: "New York",
      details: ["42 Mamnoun Street, Saba", "Carpet and Antiques Store, UK"],
    },
    {
      id: 2,
      icon: "/mask-group-4.svg",
      title: "Phone Number",
      details: ["+971 551 579 261", "+97 155 596 1659"],
    },
    {
      id: 3,
      icon: "/mask-group-2.svg",
      title: "Email Address",
      subtitle: "Interested in working with us?",
      details: ["support.industrie@gmail.com"],
    },
    {
      id: 4,
      icon: "/mask-group-1.svg",
      title: "Opening Hour",
      details: ["Mon - Fri: 09am - 07pm"],
    },
  ];

  return (
    <section className="relative w-full h-[780px] bg-[#e8e8e8]">
      <div className="relative h-full">
        {/* Background images */}
        <div className="relative w-full h-full">
          <div className="relative w-full h-full bg-[url(/image-5.png)] bg-cover">
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Background texture"
              src="/image-6.png"
            />
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Background overlay"
              src="/image-7.png"
            />
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Background pattern"
              src="/image-8.png"
            />
          </div>
        </div>

        {/* Contact section header */}
        <div className="absolute top-[117px] left-[76px] flex items-center">
          <img
            className="w-2.5 h-3.5 mr-4"
            alt="Contact icon"
            src="/svg-1.svg"
          />
          <h2 className="font-medium text-app-primary text-[15.1px] tracking-[0] leading-[23.7px] font-['Space_Grotesk',Helvetica]">
            CONTACT
          </h2>
        </div>

        {/* Description text */}
        <div className="absolute w-[702px] top-[319px] left-[76px]">
          <p className="font-['Space_Grotesk',Helvetica] font-normal text-black text-[16.1px] leading-[28.4px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
            <br />
            suffered alteration in some form by injected humour.
          </p>
        </div>

        {/* Contact cards - first row */}
        <div className="absolute top-[419px] left-[76px] flex gap-[47px]">
          {contactCards.slice(0, 2).map((card) => (
            <Card
              key={card.id}
              className="w-[346px] h-[97px] bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0 flex">
                <img
                  className="w-[66px] h-[85px] mt-1.5"
                  alt={`${card.title} icon`}
                  src={card.icon}
                />
                <div className="ml-[29px]">
                  <h3 className="font-['Space_Grotesk',Helvetica] font-bold text-black text-[22.7px] leading-[27.3px]">
                    {card.title}
                  </h3>
                  <div className="mt-[22px]">
                    {card.details.map((detail, index) => (
                      <p
                        key={index}
                        className="font-['Space_Grotesk',Helvetica] font-medium text-black text-[16.1px] leading-[23.2px]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact cards - second row */}
        <div className="absolute top-[544px] left-[76px] flex gap-[47px]">
          {contactCards.slice(2, 4).map((card) => (
            <Card
              key={card.id}
              className="w-[346px] h-[98px] bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0 flex">
                <img
                  className="w-[66px] h-[85px] mt-1.5"
                  alt={`${card.title} icon`}
                  src={card.icon}
                />
                <div className="ml-[29px]">
                  <h3 className="font-['Space_Grotesk',Helvetica] font-bold text-black text-[22.7px] leading-[27.3px]">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="font-['Space_Grotesk',Helvetica] font-normal text-black text-[16.1px] leading-[28.4px] mt-[18px]">
                      {card.subtitle}
                    </p>
                  )}
                  <div className={card.subtitle ? "mt-[2px]" : "mt-[18px]"}>
                    {card.details.map((detail, index) => (
                      <p
                        key={index}
                        className="font-['Space_Grotesk',Helvetica] font-medium text-black text-[16.1px] leading-[23.2px]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right side image */}
        <img
          className="absolute w-[492px] h-[572px] top-[104px] right-[76px]"
          alt="Contact illustration"
          src="/mask-group-3.svg"
        />
      </div>
    </section>
  );
};
