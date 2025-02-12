import { events } from "@/config/const";
import { TypographyH5 } from "../../shared/typography";
import { RecentCard } from "../../shared/card/RecentCard";

interface SectionRecentProps {
  recent?: boolean;
}
export const SectionRecent = ({ recent }: SectionRecentProps) => {
  return (
    <>
      <section className="px-4 py-6 space-y-10 md:m-12 m-4">
        {recent && <TypographyH5 className="">RECIENTES</TypographyH5>}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[100%] mx-auto">
          {events.map((event) => (
            <RecentCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </>
  );
};
