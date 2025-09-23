import ProductCard from "./ProductCard";

import iphone17BlueImage from "@/assets/iphone-17-blue.jpg";
import iphone17OrangeImage from "@/assets/iphone-17-orange.jpg";
import iphone17WhiteImage from "@/assets/iphone-17-white.jpg";
import iphone17BlackImage from "@/assets/iphone-17-black.jpg";

const IPhoneShowcase = () => {
  const iphones = [
    {
      id: 1,
      image: iphone17BlackImage,
      title: "iPhone 17 APPLE (6.3'' - 256 GB - Space Black)",
      price: "€989.99",
      alt: "iPhone 17 256GB Space Black",
      badge: "Up to 30x interest-free"
    },
    {
      id: 2,
      image: iphone17BlueImage,
      title: "iPhone 17 Pro Max APPLE (6.9'' - 256 GB - Deep Blue)",
      price: "€1,499.00",
      alt: "iPhone 17 Pro Max 256GB Deep Blue",
      badge: "Up to 30x interest-free"
    },
    {
      id: 3,
      image: iphone17OrangeImage,
      title: "iPhone 17 Pro Max APPLE (6.9'' - 256 GB - Orange)",
      price: "€1,499.00",
      alt: "iPhone 17 Pro Max 256GB Orange",
      badge: "Up to 30x interest-free"
    },
    {
      id: 4,
      image: iphone17WhiteImage,
      title: "iPhone 17 Pro Max APPLE (6.9'' - 256 GB - White)",
      price: "€1,499.00",
      alt: "iPhone 17 Pro Max 256GB White",
      badge: "Up to 30x interest-free"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        New iPhone 17 Collection
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {iphones.map((iphone) => (
          <ProductCard
            key={iphone.id}
            image={iphone.image}
            title={iphone.title}
            price={iphone.price}
            alt={iphone.alt}
            badge={iphone.badge}
          />
        ))}
      </div>
    </section>
  );
};

export default IPhoneShowcase;