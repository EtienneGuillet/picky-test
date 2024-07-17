import Image from "next/image";

type ThumbnailProps = {
  src: string;
  alt: string;
};

function Thumbnail({ src, alt }: ThumbnailProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={45}
      height={45}
      className="w-[45px] h-auto aspect-square rounded-full object-cover"
    />
  );
}

export default Thumbnail;
