import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProductsByAnima = (): JSX.Element => {
  // Product card data for mapping
  const productCards = [
    {
      id: 1,
      image: "/airmisting.png",
      title: "Lorem Ipsum",
      description:
        "Anti-smog gun/Air Misting Machine is a device that sprays atomized water into the atmosphere to reduce air pollution.",
      backgroundClass: "[background:url(..//airmisting.png)_50%_50%_/_cover]",
      gradientClass:
        "[background:linear-gradient(270deg,rgba(17,29,25,0)_0%,rgba(17,29,25,0)_0%,rgba(17,29,25,0.42)_83%)]",
    },
    {
      id: 2,
      image: "/conveyor.png",
      title: "Lorem Ipsum",
      description:
        "We are prominent conveyor manufacturers in Delhi NCR offering high-quality trusted and certified products at a reasonable price.",
      backgroundClass: "[background:url(..//conveyor.png)_50%_50%_/_cover]",
      gradientClass: "bg-[#211f2617]",
    },
    {
      id: 3,
      image: "/billet-storage-yard--1--1.png",
      title: "Lorem Ipsum",
      description:
        "Multi-Sorting System Separating Mixed Wastes into Three Categories Separation Technology for Various Physical…",
      backgroundClass:
        "[background:url(..//billet-storage-yard--1--1.png)_50%_50%_/_cover]",
      gradientClass:
        "[background:linear-gradient(270deg,rgba(17,29,25,0)_0%,rgba(17,29,25,0)_0%,rgba(17,29,25,0.36)_83%)]",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-[#80828540] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Background images with blur effect */}
        <div className="absolute w-full h-full top-0 left-0 -z-10 blur-[2.9px]">
          <div className="relative w-full h-full">
            <img
              className="absolute w-1/2 h-full top-0 left-0 object-cover"
              alt="Background image"
              src="/image-148-2.png"
            />
            <img
              className="absolute w-1/2 h-full top-0 right-0 object-cover"
              alt="Background image"
              src="/image-148-2.png"
            />
          </div>
        </div>

        {/* Section heading */}
        <h2 className="font-bold text-2xl text-app-primary mb-12 [font-family:'Helvetica_Neue-Bold',Helvetica]">
          Business
        </h2>

        {/* Product cards container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {productCards.map((product) => (
              <div key={product.id} className="relative h-[478px]">
                {/* Card image section */}
                <div className="relative h-[282px] rounded-[9.72px] overflow-hidden">
                  <div
                    className={`absolute w-full h-full top-0 left-0 rounded-[9.72px] ${product.backgroundClass}`}
                  />
                  <div className="absolute w-full h-full top-0 left-0 bg-[#111d19] rounded-[9.72px] opacity-15" />
                  <div
                    className={`absolute w-full h-full top-0 left-0 rounded-[4.86px] opacity-80 ${product.gradientClass}`}
                  />
                </div>

                {/* Card content section */}
                <Card className="absolute w-[90%] h-[248px] top-[230px] left-[5%] rounded-[9.72px] shadow-[0px_4.86px_41.79px_#111d190f] border-none">
                  <CardContent className="p-0">
                    <div className="p-10">
                      <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#182822] text-[19px] leading-[28.1px] mb-4">
                        {product.title}
                      </h3>
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-[#62706b] text-[14.6px] leading-[24.3px] mb-6">
                        {product.description}
                      </p>
                      <div className="border-b-[0.78px] border-[#d9e3e0] mb-6" />
                      <div className="flex items-center">
                        <span className="[font-family:'Roboto',Helvetica] text-[#20332c] text-[14.6px] leading-[14.6px] font-bold">
                          Explore More
                        </span>
                        <ArrowRightIcon className="w-3 h-2.5 ml-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-[9.72px] mb-8">
            <div className="w-[29.16px] h-[5.83px] bg-[#182822]" />
            <div className="w-[29.16px] h-[5.83px] bg-app-primary" />
            <div className="w-[29.16px] h-[5.83px] bg-app-primary" />
          </div>

          {/* Explore All button */}
          <div className="flex justify-center">
            <Button className="h-11 px-[30.76px] py-[19.23px] bg-app-primary rounded-[3.85px] shadow-[0px_4.81px_14.42px_#252c6126,0px_1.92px_3.85px_#8890c233]">
              <span className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-white text-[15.6px] leading-[15.6px] font-bold">
                Explore All
              </span>
              <ChevronRightIcon className="w-[16.52px] h-[16.52px] ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
