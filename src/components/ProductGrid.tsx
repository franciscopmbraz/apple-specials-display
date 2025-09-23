import ProductCard from "./ProductCard";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  alt: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            alt={product.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;