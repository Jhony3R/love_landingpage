import Header from "@/components/Header";
import Preambulo from "@/components/Preambulo";
import MangaGallery from "@/components/MangaGallery";
import LegalArticles from "@/components/LegalArticles";
import DistanceSection from "@/components/DistanceSection";
import FinalVerdict from "@/components/FinalVerdict";
import MusicPlayer from "@/components/MusicPlayer";
import EasterEgg from "@/components/EasterEgg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <EasterEgg />
      <MusicPlayer />
      
      <main className="max-w-6xl mx-auto">
        <Header />
        <Preambulo />
        <MangaGallery />
        <LegalArticles />
        <DistanceSection />
        <FinalVerdict />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t-[3px] border-foreground">
        <p className="font-legal text-sm text-muted-foreground mb-2">
          Expediente registrado bajo el Código Civil del Amor · Libro V, Art. ∞
        </p>
        <p className="font-handwriting text-xl" style={{ color: "hsl(var(--pastel-pink))" }}>
          Hecho con todo mi amor 🌻💜
        </p>
      </footer>
    </div>
  );
};

export default Index;
