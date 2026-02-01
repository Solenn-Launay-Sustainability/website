import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  url: string;
  name: string;
}

export const Logo = ({ src, alt, url, name }: LogoProps) => {
  return (
    <a
      className="block rounded-full bg-muted px-1 py-1 text-xs transition-colors hover:bg-muted/80"
      href={url}
      key={name}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        alt={alt}
        className="h-12 w-auto overflow-hidden rounded-full"
        src={src}
      />
    </a>
  );
};
