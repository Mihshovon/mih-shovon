import { exp } from "../data/exp";
import GlowBall from "@/components/shared/GlowBall";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { LaptopMinimalCheck } from "lucide-react";

export default function Experience() {
  return (
    <section className="relative">
      <GlowBall color="w-[800px] h-[800px] bg-amber-500 opacity-10 rounded-full blur-3xl absolute z-[1] top-0 left-0" />
      <div className="max-w-7xl flex justify-between items-center m-auto">
        <div className="felx flex-col justify-center items-center">
          <div>
            <Image
              alt="skill"
              width={500}
              height={500}
              src="/images/exp_img.jpg"
              className="rounded-md p-6"
            />
          </div>
        </div>
        <div className="p-20 max-w-2xl">
          <div className="flex flex-col gap-4 mb-4">
            <h3 className="text-5xl font-bold py-4 bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque qui labore maxime itaque totam aliquid laboriosam
              sapiente, magni architecto asperiores fuga odio minus inventore
              at? Rem quo sint repudiandae qui?
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {exp.map((item, index) => (
              <Card className="shadow-none" key={index}>
                <CardContent className="flex justify-center items-center gap-5">
                  <div className="bg-gradient-to-r from-green-500 to-cyan-500 p-4 rounded-full">
                    <LaptopMinimalCheck color="#FFFF" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">
                      {item.exp}
                      <span>+</span>
                    </h3>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <GlowBall color="w-[800px] h-[800px] bg-indigo-500 opacity-10 rounded-full blur-3xl absolute z-[1] top-50 right-0" />
    </section>
  );
}
