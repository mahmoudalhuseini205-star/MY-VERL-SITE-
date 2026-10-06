export function SectionIndex({ children, as: Tag = "p" }: { children: string; as?: "p" | "h2" }) {
  return <Tag className="t-label text-muted">{children}</Tag>;
}
