import Image from "next/image";

export default function SoulvilleLogo({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span
      className={
        compact
          ? "soulville-logo soulville-logo-compact"
          : "soulville-logo"
      }
      aria-label="Soulville Records"
    >
      <Image
        src="/soulville-logo.png"
        alt="Soulville Records"
        width={360}
        height={360}
        priority
        className="soulville-logo-image"
      />
    </span>
  );
}