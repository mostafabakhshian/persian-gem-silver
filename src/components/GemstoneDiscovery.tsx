import gemstonesImg from "@/assets/gemstones-collection.jpg";
import { Button } from "@/components/ui/button";

const stones = [
  { name: "فیروزه", color: "bg-[hsl(175,60%,45%)]", meaning: "محافظت و شادکامی" },
  { name: "عقیق", color: "bg-[hsl(15,60%,35%)]", meaning: "قدرت و آرامش" },
  { name: "زمرد", color: "bg-[hsl(140,50%,30%)]", meaning: "عشق و تجدد" },
  { name: "یاقوت", color: "bg-[hsl(0,60%,40%)]", meaning: "اشتیاق و شجاعت" },
  { name: "شجر", color: "bg-[hsl(120,25%,40%)]", meaning: "طبیعت و رشد" },
  { name: "حدید", color: "bg-[hsl(220,10%,30%)]", meaning: "استقامت و ایمان" },
];

const GemstoneDiscovery = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground" aria-labelledby="gemstones-heading">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="gemstones-heading" className="text-2xl md:text-4xl font-bold mb-4">
              دنیای سنگ‌های قیمتی
            </h2>
            <p className="text-primary-foreground/80 text-sm md:text-base mb-8 leading-relaxed">
              هر سنگ قیمتی داستانی دارد. از فیروزه نیشابوری تا عقیق یمنی، 
              مجموعه‌ای از سنگ‌های اصیل با گواهی اصالت منتظر شماست.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {stones.map((stone) => (
                <a
                  key={stone.name}
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors group"
                >
                  <span className={`w-8 h-8 rounded-full ${stone.color} flex-shrink-0 ring-2 ring-primary-foreground/20`} />
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">{stone.name}</p>
                    <p className="text-xs text-primary-foreground/60">{stone.meaning}</p>
                  </div>
                </a>
              ))}
            </div>
            <Button variant="accent" size="lg">
              کشف سنگ‌ها
            </Button>
          </div>
          <div className="relative">
            <img
              src={gemstonesImg}
              alt="مجموعه سنگ‌های قیمتی طبیعی"
              className="rounded-2xl shadow-luxury w-full"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemstoneDiscovery;
