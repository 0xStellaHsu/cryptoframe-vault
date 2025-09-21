import NFTGallery from "@/components/NFTGallery";
import FHEHeader from "@/components/FHEHeader";
import DigitalFooter from "@/components/DigitalFooter";
import { EncryptedDataUpload } from "@/components/EncryptedDataUpload";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <FHEHeader />
      <main className="pt-20">
        <NFTGallery />
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <EncryptedDataUpload />
            </div>
          </div>
        </section>
      </main>
      <DigitalFooter />
    </div>
  );
};

export default Gallery;