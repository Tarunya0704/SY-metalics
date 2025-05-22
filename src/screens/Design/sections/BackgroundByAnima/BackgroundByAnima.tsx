import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BackgroundByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full bg-app-primary py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left side with text and button */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-[34px] font-bold text-white leading-[41.3px] [font-family:'LEMON_MILK-Bold',Helvetica] mb-4">
            BRAND SLOGAN
          </h2>

          <p className="text-base text-white [font-family:'Roboto',Helvetica] mb-8">
            Contact us to immediately receive a detailed quote and advice from
            our engineers.
          </p>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold"
          >
            View Our Product
          </Button>
        </div>

        {/* Right side with images */}
        <div className="md:w-1/2 relative h-[283px]">
          <Card className="absolute right-0 h-[283px] w-[444px] border-none rounded-none overflow-hidden">
            <CardContent className="p-0">
              <img
                className="w-full h-full object-cover"
                alt="Product showcase"
                src="/image-148-2.png"
              />
            </CardContent>
          </Card>

          <Card className="absolute left-0 h-[169px] w-[273px] border-none rounded-none overflow-hidden">
            <CardContent className="p-0">
              <img
                className="w-full h-full"
                alt="Product feature"
                src="/image-155.png"
              />
            </CardContent>
          </Card>

          <Card className="absolute bottom-0 right-[100px] h-[197px] w-[323px] border-none rounded-none overflow-hidden">
            <CardContent className="p-0">
              <img
                className="w-full h-full object-cover"
                alt="Product detail"
                src="/image-176.png"
              />
            </CardContent>
          </Card>

          {/* Background blurred image */}
          <div className="absolute left-[-550px] w-[612px] h-[283px]">
            <img
              className="w-full h-full blur-[3.5px] object-cover"
              alt="Background texture"
              src="/image-156.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
