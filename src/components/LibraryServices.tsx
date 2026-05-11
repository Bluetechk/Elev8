import { BookOpen, ShoppingBag, Star } from 'lucide-react';

const LibraryServices = () => {
  return (
    <section className="py-24 bg-bg-light text-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Book Lending */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-primary/5 h-full">
            <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-8">
              <BookOpen size={32} />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Book <span className="text-secondary italic">Lending</span></h3>
            <p className="text-primary/70 mb-10 font-medium leading-relaxed">
              Members have access to our full collection which they can borrow, take home, and return when done — before borrowing the next one. It is reading made simple, affordable, and continuous.
            </p>
            
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-widest text-secondary mb-6">How it works:</p>
              {['Browse our collection', 'Borrow your chosen book', 'Take it home and read it', 'Return it when you are done', 'Borrow your next one'].map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-bg-light flex items-center justify-center text-primary font-bold text-sm group-hover:bg-secondary transition-colors">
                    {i + 1}
                  </div>
                  <span className="font-bold text-primary/80 group-hover:text-primary transition-colors">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Sales & Collection */}
          <div className="space-y-8 h-full">
            <div className="bg-primary text-white p-12 rounded-[3rem] shadow-xl border border-white/10">
              <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-8">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6 text-white">Book <span className="text-secondary italic">Sales</span></h3>
              <p className="text-white/70 font-medium leading-relaxed">
                For books you want to own permanently — to annotate, revisit, or add to your personal library — we also offer books for outright purchase. Build your legacy one book at a time.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-primary/5">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Our <span className="text-secondary italic">Collection</span></h3>
              <p className="text-primary/70 mb-8 font-medium text-sm leading-relaxed">
                Every book has been deliberately selected. We curate with intention, choosing titles that inform, inspire, challenge, and entertain.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-bg-light rounded-2xl border border-primary/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="text-secondary" size={20} />
                    <h4 className="font-black uppercase text-sm tracking-widest">Personal Development</h4>
                  </div>
                  <p className="text-xs text-primary/60 leading-relaxed font-medium">
                    Books on mindset, habits, self-discipline, emotional intelligence, purpose, and productivity. Designed to change how you see yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryServices;
