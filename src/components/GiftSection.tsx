import giftImg from "@/assets/gift-box.jpg";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const GiftSection = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="gift-heading">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={giftImg}
            alt="جعبه هدیه جواهرات"
            className="w-full h-[400px] md:h-[450px] object-cover"
            loading="lazy"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-md mr-auto" style={{ direction: "rtl" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-gold-soft" />
                  <span className="text-gold-soft text-sm font-medium">هدیه‌ای ماندگار</span>
                </div>
                <h2 id="gift-heading" className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                  هدیه‌ای از جنس
                  <br />
                  طبیعت و هنر
                </h2>
                <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                  با بسته‌بندی لوکس و ارائه گواهی اصالت، هدیه‌ای خاص و ماندگار هدیه دهید.
                </p>
                <Button variant="accent" size="lg">
                  مشاهده پیشنهادات هدیه
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
