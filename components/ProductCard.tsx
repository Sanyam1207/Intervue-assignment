import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  href = "#",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div className="mb-16">
        <div className="w-full rounded-md overflow-hidden mb-6">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
      </div>
      <Link
        href={href}
        className="text-blue-800 font-medium flex items-center gap-1 hover:underline w-fit"
      >
        Know more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ProductCard;
