import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
}

interface TabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface PDPTabsProps {
  specs?: SpecItem[];
  description?: string;
  storyTitle?: string;
  storyContent?: string;
  careContent?: string;
  sizeGuideContent?: string;
  customTabs?: TabContent[];
}

const PDPTabs = ({
  specs,
  description,
  storyTitle,
  storyContent,
  careContent,
  sizeGuideContent,
  customTabs,
}: PDPTabsProps) => {
  const tabs: TabContent[] = [];

  if (description) {
    tabs.push({
      id: "description",
      label: "توضیحات محصول",
      content: <p className="text-sm text-muted-foreground leading-loose whitespace-pre-line">{description}</p>,
    });
  }

  if (specs && specs.length > 0) {
    tabs.push({
      id: "specs",
      label: "مشخصات فنی",
      content: (
        <div className="divide-y divide-border">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between py-3 text-sm">
              <span className="text-muted-foreground">{spec.label}</span>
              <span className="font-medium text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
      ),
    });
  }

  if (storyContent) {
    tabs.push({
      id: "story",
      label: storyTitle || "داستان ساخت",
      content: <p className="text-sm text-muted-foreground leading-loose">{storyContent}</p>,
    });
  }

  if (careContent) {
    tabs.push({
      id: "care",
      label: "نگهداری",
      content: <p className="text-sm text-muted-foreground leading-loose">{careContent}</p>,
    });
  }

  if (sizeGuideContent) {
    tabs.push({
      id: "size-guide",
      label: "راهنمای سایز",
      content: <p className="text-sm text-muted-foreground leading-loose">{sizeGuideContent}</p>,
    });
  }

  if (customTabs) tabs.push(...customTabs);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  if (tabs.length === 0) return null;

  return (
    <section className="py-8 md:py-12 border-t border-border">
      <div className="container">
        {/* Desktop tabs */}
        <div className="hidden md:block">
          <div className="flex border-b border-border gap-1 mb-6" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`px-5 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="max-w-3xl" role="tabpanel">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>

        {/* Mobile accordions */}
        <div className="md:hidden space-y-0 divide-y divide-border">
          {tabs.map((tab) => (
            <MobileAccordion key={tab.id} label={tab.label}>
              {tab.content}
            </MobileAccordion>
          ))}
        </div>
      </div>
    </section>
  );
};

const MobileAccordion = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-sm font-semibold text-foreground"
        aria-expanded={open}
      >
        {label}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="pb-4 animate-fade-in">{children}</div>}
    </div>
  );
};

export default PDPTabs;
