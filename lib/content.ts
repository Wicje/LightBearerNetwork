export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  color: string;
};

export type GalleryImage = {
  url: string;
  alt: string;
};

export const AVATAR_COLORS: Record<string, string> = {
  green: "bg-[#EAF5ED] text-[#107C41]",
  orange: "bg-[#FFF5EB] text-[#F2994A]",
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  pink: "bg-pink-50 text-pink-600",
  teal: "bg-teal-50 text-teal-600",
  indigo: "bg-indigo-50 text-indigo-600",
  gray: "bg-gray-100 text-gray-600",
};

export const GALLERY_FALLBACK: GalleryImage[] = [
  { url: "https://drive.google.com/uc?export=view&id=1oW_8eyaaLgCGJM3zHfFRJIOA9utn6WUS", alt: "Community gathering" },
  { url: "https://drive.google.com/uc?export=view&id=1UKW9Xa9eMXZhOY2oJ9xq07SJJelKQE2J", alt: "Community event" },
  { url: "https://drive.google.com/uc?export=view&id=1hocBSjfaxgXhkQF3Qczp-R_IBuECKzub", alt: "Training session" },
  { url: "https://drive.google.com/uc?export=view&id=14N2aW3hKRkq2ySqQCMXYI35LIOkF8DMM", alt: "Community moment" },
  { url: "https://drive.google.com/uc?export=view&id=1EL_ERDg1-VT8B4HsdJa4R_MLC_oy3zjR", alt: "Community gathering" },
  { url: "https://drive.google.com/uc?export=view&id=1xQ-n0df3uwpDGa0wTGckWHW8EEX-nL4R", alt: "Community event" },
];
