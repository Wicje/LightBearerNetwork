import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import { reader } from "@/lib/reader";
import { GALLERY_FALLBACK } from "@/lib/content";

export default async function GalleryPage() {
  const gallery = await reader.singletons.gallery.read();
  const images = gallery?.images?.length
    ? gallery.images
        .filter((image) => Boolean(image.url))
        .map((image) => ({ url: image.url as string, alt: image.alt }))
    : GALLERY_FALLBACK;

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-[#F2994A] transition-colors font-mono uppercase tracking-widest text-[11px] font-bold">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* HEADER TITLE */}
      <section className="pt-40 pb-16 px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 mx-auto border border-orange-100 shadow-sm">
          <Images className="w-8 h-8 text-[#F2994A]" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-gray-900 mb-6">
          Community <span className="text-[#F2994A]">Gallery</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore moments from our gatherings, trainings, and community events.
        </p>
      </section>

      {/* GRID */}
      <section className="px-6">
        <GalleryGrid images={images} />
      </section>
    </main>
  );
}
