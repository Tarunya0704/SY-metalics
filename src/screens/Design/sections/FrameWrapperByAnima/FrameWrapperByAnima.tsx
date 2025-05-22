import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  const cards = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu condimentum ut ipsum elementum lectus. In vulputate pulvinar.",
      icon: "/target-audience-1.png",
      iconAlt: "Target audience",
      backgroundImage: "url(..//image-2.png)",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit ut integer et duis erat platea id quis arcu. Mauris sed consectetur iaculis ac orci.",
      icon: "/vision-1.png",
      iconAlt: "Vision",
      backgroundImage: "url(..//image-3.png)",
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "Lorem ipsum dolor sit amet consectetur. In eget lacus amet faucibus sagittis in est etiam. Euismod cursus fusce fusce mattis.",
      icon: "/public-service-1.png",
      iconAlt: "Public service",
      backgroundImage: "url(..//image-4.png)",
    },
  ];

  return (
    <section className="w-full py-12 px-6 bg-[linear-gradient(0deg,rgba(213,213,213,0.65)_0%,rgba(213,213,213,0.65)_100%),url(..//frame-4675.png)_50%_50%_/_cover]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="w-full max-w-[400px] h-[530.4px] relative shadow-[0px_5px_83px_#1b1a1a0f] rounded-none"
          >
            <div className="w-full h-1.5 bg-app-primary absolute top-0 left-0"></div>

            <CardContent className="p-0 h-full">
              <div className="p-[50px] pt-[42px]">
                <img
                  className="w-[76px] h-[76px] mb-[35px] object-cover"
                  alt={card.iconAlt}
                  src={card.icon}
                />

                <h3 className="font-['Saira',Helvetica] font-semibold text-[#222222] text-2xl leading-[30px] mb-[32px]">
                  {card.title}
                </h3>

                <p className="font-['Roboto',Helvetica] font-normal text-[#9b9b9b] text-[15px] leading-[25px]">
                  {card.description}
                </p>
              </div>

              <div className="absolute w-full h-[168px] bottom-0 left-0">
                <div
                  className="w-full h-[168px]"
                  style={{
                    background: card.backgroundImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
