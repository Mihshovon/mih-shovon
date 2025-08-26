import GlowBall from "@/components/shared/GlowBall";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-emerald-50 to-teal-50 relative">
      <GlowBall color="w-[800px] h-[800px] bg-cyan-500 opacity-10 rounded-full blur-3xl absolute z-[1] top-0 left-0" />
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <div className="max-w-2xl flex flex-col gap-6 relative">
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
            width={500}
            height={500}
            alt="hero"
            src="/images/shovon.jpg"
          />
        </div>
      </div>
    </section>
  );
}
