import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { WorkImage as Img } from "@/content/work/types";
import { Blueprint } from "./Blueprint";

// Real image once the file is in public/, otherwise a blueprint placeholder at the same size
// (checked at build time). Placeholders must all be replaced before launch.
export function WorkImage({
  image,
  locale,
  sizes,
  priority,
}: {
  image: Img;
  locale: Locale;
  sizes: string;
  priority?: boolean;
}) {
  if (fs.existsSync(path.join(process.cwd(), "public", image.src))) {
    return (
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt[locale]}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    );
  }
  return <Blueprint label={image.label} width={image.width} height={image.height} alt={image.alt[locale]} />;
}
