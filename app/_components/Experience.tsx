import * as motion from "motion/react-client";

import GlowBall from "@/components/shared/GlowBall";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="relative h-screen">
      <GlowBall color="w-[800px] h-[800px] bg-amber-500 opacity-10 rounded-full blur-3xl absolute z-[1] top-0 left-0" />
      <div className="max-w-7xl flex justify-between items-center m-auto">
        <div className="felx flex-col justify-center items-center">
          <Card className="bg-white px-12 py-28 flex flex-col justify-center items-center">
            <CardContent>
              <motion.div
                animate={{
                  
                  rotate: [0, 0, 270, 360, 80, 0, 0],
                }}
                transition={{ duration: 3 }}
              >
                <h2 className="text-8xl font-bold text-cyan-500 text-center">
                  05
                </h2>
              </motion.div>
              <p className="text-2xl">Years of Experience</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-red-500 font-semibold text-4xl">100%</h2>
              <span className="text-lg">Client Setisfaction</span>
            </CardContent>
          </Card>
        </div>
        <div className="p-20 max-w-2xl">
          <div className="flex flex-col gap-4 mb-4">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              My Skills
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque qui labore maxime itaque totam aliquid laboriosam
              sapiente, magni architecto asperiores fuga odio minus inventore
              at? Rem quo sint repudiandae qui?
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <motion.div whileHover={{ scale: 1.8 }}>
              <Card className="border-[1px] shadow-xs bg-white">
                <CardContent className="flex flex-col justify-center items-center">
                  <h2 className="text-4xl text-black font-semibold">90%</h2>
                  <p className="text-sm text-amber-500">JavaScript</p>
                </CardContent>
              </Card>
            </motion.div>
            <Card>
              <CardContent className="flex flex-col justify-center items-center">
                <h2 className="text-4xl text-black font-semibold">90%</h2>
                <p>JavaScript</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col justify-center items-center">
                <h2 className="text-4xl text-black font-semibold">90%</h2>
                <p>JavaScript</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col justify-center items-center">
                <h2 className="text-4xl text-black font-semibold">90%</h2>
                <p>JavaScript</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col justify-center items-center">
                <h2 className="text-4xl text-black font-semibold">90%</h2>
                <p>JavaScript</p>
              </CardContent>
            </Card>

            <motion.div whileHover={{ scale: 1.5 }}>
              <Card>
                <CardContent className="flex flex-col justify-center items-center">
                  <h2 className="text-4xl text-black font-semibold">90%</h2>
                  <p>JavaScriptxxx</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div>
            <Image
              alt="skill"
              width={500}
              height={500}
              src="/images/skill.jpg"
              className="rounded-md p-6"
            />
          </div>
        </div>
      </div>
      <GlowBall color="w-[800px] h-[800px] bg-indigo-500 opacity-10 rounded-full blur-3xl absolute z-[1] top-50 right-0" />
    </section>
  );
}
