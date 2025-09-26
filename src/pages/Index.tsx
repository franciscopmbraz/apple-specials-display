import Header from "@/components/Header";
import IPhoneShowcase from "@/components/IPhoneShowcase";
import ProductGrid from "@/components/ProductGrid";
import FAQ from "@/components/FAQ";
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
          <IPhoneShowcase />
          
          <ProductGrid 
            title="People who searched iPhone 17 also bought"
            products={relatedProducts}
          />
          
          <ProductGrid 
            title="iPhone 17 Accessories"
            products={accessories}
          />
          
          <FAQ />
          
          {/* Cal element-click embed code begins */}
          <script 
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", "sessao-de-ajuda", {origin:"https://app.cal.com"});
                Cal.ns["sessao-de-ajuda"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
              `
            }}
          />
          {/* Cal element-click embed code ends */}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;