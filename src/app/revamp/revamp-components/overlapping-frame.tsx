import Image from "next/image";

interface OverlappingFramesProps {
  mainImage?: string;
  secondaryImage?: string;
  years?: number;
}

export default function OverlappingFrames({
  mainImage = "/experince.jpg",
  secondaryImage = "/aaa.jpg",
  years = 25,
}: OverlappingFramesProps) {
  return (
    <div className="relative w-full  aspect-square">
      {/* Main circular frame */}
      <div className="absolute w-[400px] h-[400px]  top-0  left-[32%]">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={mainImage}
            alt="Main image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Secondary circular frame */}
      <div className="absolute bottom-[28%] left-[20%] w-2/5 aspect-square">
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black shadow-lg">
          <Image
            src={secondaryImage}
            alt="Secondary image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
