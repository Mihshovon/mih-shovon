import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WthatIdo() {
  return (
    <section className="bg-cyan-50 p-10">
      <Card className="max-w-7xl mx-auto border-none rounded-4xl">
        <CardContent className="flex justify-evenly items-center flex-row-reverse">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold text-3xl">What I Do?</h3>
            <Image
              alt="whatido"
              width={500}
              height={500}
              src="/images/what_i_do.png"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white text-3xl font-semibold">1</span>
              </div>
              <div>
                <h4>Frontend Development</h4>
                <p>
                  Crafting visually appealing, responsive, and high-performance
                  user interfaces using modern frameworks like React and
                  Next.js.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-white text-3xl font-semibold">1</span>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-white text-3xl font-semibold">1</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
