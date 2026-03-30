import { companies } from "@/lib/data";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
