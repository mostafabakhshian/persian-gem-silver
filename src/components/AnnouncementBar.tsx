import { Phone, Truck } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>۰۹۱۲۳۴۵۶۷۸۹</span>
        </div>
        <p className="hidden md:block font-medium">
          ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
        </p>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4" />
          <span>ارسال سریع به سراسر ایران</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
