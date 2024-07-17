import Image from "next/image";

type StatsCounterProps = {
  iconUrl: string;
  alt: string;
  statsCount?: number;
};

function StatsCounter({ iconUrl, statsCount, alt }: StatsCounterProps) {
  return (
    <div className="flex gap-2 items-center text-gray-700 text-xs">
      <button>
        <Image
          src={iconUrl}
          alt={alt}
          width={16}
          height={16}
          className="aspect-square w-4 h-auto object-cover"
        />
      </button>
      {statsCount}
    </div>
  );
}

export default StatsCounter;
