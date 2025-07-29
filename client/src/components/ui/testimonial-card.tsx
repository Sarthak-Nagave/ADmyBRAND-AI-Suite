import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, title, image, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400 mr-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
        </div>
        <span className="text-slate-600 font-medium">{rating}.0</span>
      </div>
      <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <img
          src={image}
          alt={`${name}, ${title}`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <div className="font-semibold text-slate-900">{name}</div>
          <div className="text-slate-600 text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
}
