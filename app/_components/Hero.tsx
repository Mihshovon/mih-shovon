import GlowBall from "@/components/shared/GlowBall";
import IconJs from "@/components/shared/IconJs";
import IconReact from "@/components/shared/IconReact";
import IconsNext from "@/components/shared/IconsNext";
import IconTalwind from "@/components/shared/IconTalwind";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-emerald-50 to-teal-50 relative">
      <GlowBall color="w-[800px] h-[800px] bg-cyan-500 opacity-10 rounded-full blur-3xl absolute z-[1] top-0 left-0" />
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <div className="max-w-2xl flex flex-col gap-6 relative z-50">
          <h1 className="text-4xl font-bold">
            Hi<span>,</span>
          </h1>
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-green-500 via-violet-500 to-red-600 bg-clip-text text-transparent">{`I'm Iqbal Hossain`}</h2>
          <h3 className="font-bold text-6xl">Softwer Developer</h3>
          <p className="text-md">
            {`I'm a Full-Stack developer, I have 5+ years of experience in website & mobile app.
             I build website using modran technology - next.js/talwind.css/express.js`}
          </p>
          <div className="flex gap-4">
            <Button className="cursor-pointer">Get in touch</Button>
            <Button className="cursor-pointer">Resume</Button>
          </div>
        </div>
        <div className="relative max-w-2xl">
          <GlowBall color="w-[800px] h-[800px] bg-red-500 opacity-10 rounded-full blur-3xl absolute top-50 z-[1]" />
          <Image
            className="rounded-full shadow-md my-20 relative z-50 object-cover"
            width={400}
            height={400}
            alt="hero"
            src="/images/shovon.jpg"
          />
          <div className="absolute top-16 left-5 w-10 h-10 blur-[3px]">
            <IconJs />
          </div>
          <div className="absolute top-10 right-5 w-10 h-10 blur-[3px]">
            <IconReact />
          </div>
          <div className="absolute bottom-10 left-5 w-10 h-10 blur-[3px]">
            <IconTalwind />
          </div>
          <div className="absolute bottom-16 right-5 w-10 h-10 blur-[3px]">
            <IconsNext />
          </div>
        </div>
        <div className="absolute blur-md opacity-80">
          <Image
            alt="line3"
            width={1000}
            height={200}
            className="w-full"
            src="/images/line3.png"
          />
        </div>
      </div>
    </section>
  );
}
