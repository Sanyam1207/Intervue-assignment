import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c6135016fce3dec26c8c4b_technical-interviews.png",
    title: "On-demand",
    description:
      "Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us",
    href: "#",
  },
  {
    image: "https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c61350bf2156a87d68512b_programming.png",
    title: "Live interviews",
    description:
      "Assess candidates in real-time with our live coding environment & integrated video calls",
    href: "#",
  },
  {
    image: "https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c616d53601adf691d597e4_detailed-report.png",
    title: "Assessments",
    description:
      "Share assessments across batches with MCQ, Programming and Subjective questions.",
    href: "#",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-light md:text-center mb-16">
        Explore more <br className="md:hidden block"/> products on intervue
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            description={product.description}
            href={product.href}
          />
        ))}
      </div>
    </section>
  );
}
