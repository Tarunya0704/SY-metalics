import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    {
      number: "100+",
      description: "Schools Supported",
    },
    {
      number: "20+",
      description: "Schools Supported",
    },
    {
      number: "10,000+",
      description: "Schools Supported",
    },
  ];

  return (
    <section className="relative w-full h-[578px] bg-[#80828517] flex flex-row">
      {/* Left side with background image */}
      <div className="w-1/2 h-full bg-[url(/image.png)] bg-cover bg-center relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[406px] flex flex-col gap-7">
          <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-5xl tracking-[-0.06px] leading-[25px]">
            Building
          </div>
          <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-5xl tracking-[-0.06px] leading-[25px]">
            Communities,
          </div>
          <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-5xl tracking-[-0.06px] leading-[25px]">
            Empowering Lives
          </div>
        </div>
      </div>

      {/* Right side with content */}
      <div className="w-1/2 h-full flex flex-col px-14 pt-16 relative">
        {/* Heading */}
        <div className="flex flex-col gap-7 mb-14">
          <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[32px] tracking-[-0.03px] leading-[9px]">
            Corporate Social <br />
            Responsibility
          </div>
        </div>

        {/* Subheading */}
        <div className="flex flex-col gap-7 mb-14">
          <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-[47px] tracking-[-0.06px] leading-7">
            Building Communities, <br />
            Empowering Lives
          </div>
        </div>

        {/* Statistics */}
        <div className="flex items-center gap-14">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="w-[126px] border-none shadow-none bg-transparent"
            >
              <CardContent className="flex flex-col items-start gap-2 p-0">
                <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ee741d] text-[41px] tracking-[0] leading-[41px]">
                  {stat.number}
                </div>
                <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-[25px] tracking-[0] leading-[25px]">
                  {stat.description.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word} {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <Button className="w-[257px] h-[45px] absolute bottom-16 left-14 bg-app-primary hover:bg-app-primary/90 rounded-[3.96px] shadow-[0px_4.95px_14.84px_#252c6126,0px_1.98px_3.96px_#8890c233]">
          <span className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-base">
            Learn More About Our Impact
          </span>
        </Button>
      </div>
    </section>
  );
};
