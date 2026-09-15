import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />
      <Faq items={FAQ.home} />
    </main>
  );
}
