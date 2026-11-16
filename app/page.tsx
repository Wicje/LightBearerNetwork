import HomeClient from "@/components/HomeClient";
import { reader } from "@/lib/reader";
import { GALLERY_FALLBACK, type Testimonial } from "@/lib/content";

export default async function Page() {
  const [entries, gallery] = await Promise.all([
    reader.collections.testimonials.all(),
    reader.singletons.gallery.read(),
  ]);

  const testimonials: Testimonial[] = entries.map(({ entry }) => ({
    name: entry.name,
    role: entry.role,
    quote: entry.quote,
    initials: entry.initials,
    color: entry.color,
  }));

  const galleryImages: string[] = gallery?.images?.length
    ? gallery.images.map((image) => image.url).filter((url): url is string => Boolean(url))
    : GALLERY_FALLBACK.map((image) => image.url);

  return <HomeClient testimonials={testimonials} galleryImages={galleryImages} />;
}
