import { Quote as QuoteIcon } from 'lucide-react';
import libraryImage from '../assets/libraryImage.png';

const LibraryAbout = () => {
  return (
    <>
      {/* Who We Are */}
      <section className="py-24 bg-white text-primary overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-primary/5 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
                WHO WE <span className="text-secondary italic">ARE</span>
              </h2>
              <div className="space-y-6 text-primary/70 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  Elev8 Library is the knowledge and literary arm of Elev8 Inc. We are a curated, subscription-based book lending and sales service based in Monrovia, Liberia, built on a simple but powerful belief: that reading is one of the most transformative investments a person can make in themselves.
                </p>
                <p className="text-primary font-black border-l-4 border-secondary pl-6 py-2 bg-secondary/5 rounded-r-2xl">
                  We exist to make that investment accessible. Through affordable membership and a carefully selected collection, Elev8 Library is creating a community of well-read, well-informed, and well-equipped individuals — one book at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reading Matters — text on the left, full-height image on the far right */}
      <section className="relative bg-white text-primary overflow-hidden min-h-screen flex items-center">
        {/* Far-right, viewport-height image acting like a one-sided background */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/5">
          <img
            src={libraryImage}
            alt="Person reading at Elev8 Library"
            className="h-full w-full object-cover object-center"
          />
          {/* Fade into white on the left so the text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:via-white/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-secondary rounded-full mb-10 shadow-xl">
              <QuoteIcon size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
              WHY READING <span className="text-secondary italic">MATTERS</span>
            </h2>
            <div className="space-y-8 text-primary/70 text-lg md:text-xl leading-relaxed font-medium italic">
              <p>
                "The most successful people in the world — across business, leadership, science, arts, and every field in between — share one common habit: they read. Consistently, intentionally, and widely."
              </p>
              <p className="not-italic text-primary font-bold">
                Reading expands your thinking. It introduces you to ideas, perspectives, and experiences you would never encounter otherwise. It builds vocabulary, sharpens communication, deepens empathy, and equips you with knowledge that compounds over time.
              </p>
              <p className="text-secondary font-black uppercase tracking-widest text-sm pt-4">
                A person who reads regularly thinks differently, speaks differently, and leads differently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryAbout;
