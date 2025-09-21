import NFTGallery from "@/components/NFTGallery";
import FHEHeader from "@/components/FHEHeader";
import DigitalFooter from "@/components/DigitalFooter";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <FHEHeader />
      <main className="pt-20">
        <NFTGallery />
      </main>
      <DigitalFooter />
    </div>
  );
};

export default Gallery;