import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

import usbAdapterImage from "@/assets/usb-adapter.jpg";
import usbCableImage from "@/assets/usb-cable.jpg";
import iphone17Image from "@/assets/iphone-17.jpg";
import clearCaseImage from "@/assets/clear-case.jpg";
import screenProtectorImage from "@/assets/screen-protector.jpg";
import lensProtectorImage from "@/assets/lens-protector.jpg";

const Index = () => {
  const relatedProducts = [
    {
      id: 1,
      image: usbAdapterImage,
      title: "USB-C 20W Power Adapter",
      price: "€21.99",
      alt: "USB-C 20W Power Adapter for iPhone"
    },
    {
      id: 2,
      image: usbCableImage,
      title: "USB-C Cable 1m",
      price: "€23.99",
      alt: "USB-C Cable 1 meter length"
    },
    {
      id: 3,
      image: iphone17Image,
      title: "iPhone 17 Pro Max 512GB",
      price: "€1,749.00",
      alt: "iPhone 17 Pro Max 512GB Titanium"
    }
  ];

  const accessories = [
    {
      id: 4,
      image: clearCaseImage,
      title: "Clear Case iPhone 17",
      price: "€54.99",
      alt: "Transparent Clear Case for iPhone 17"
    },
    {
      id: 5,
      image: screenProtectorImage,
      title: "PanzerGlass Screen Protector",
      price: "€29.99",
      alt: "PanzerGlass Tempered Glass Screen Protector"
    },
    {
      id: 6,
      image: lensProtectorImage,
      title: "Camera Lens Protector",
      price: "€14.99",
      alt: "iPhone Camera Lens Protector Set"
    }
  ];

  return (
    <>
      <StructuredData />
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <ProductGrid 
            title="People who searched iPhone 17 also bought"
            products={relatedProducts}
          />
          
          <ProductGrid 
            title="iPhone 17 Accessories"
            products={accessories}
          />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;