import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  alt: string;
  badge?: string;
}

const ProductCard = ({ image, title, price, alt, badge }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
      {badge && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md z-10">
          {badge}
        </div>
      )}
      
      <CardContent className="p-4 text-center">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h3 className="font-medium text-sm md:text-base mb-2 min-h-[3rem] flex items-center">
          {title}
        </h3>
        
        <p className="text-brand-red font-bold text-lg mb-3">
          {price}
        </p>
        
        <Button 
          variant="store" 
          size="sm"
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;