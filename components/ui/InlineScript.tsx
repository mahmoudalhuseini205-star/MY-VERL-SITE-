"use client";

// Inline script that runs before first paint (Next docs: "Preventing flash before hydration").
// The server HTML carries it as JavaScript; on the client React gets an inert text/plain node, so it never
// re-runs and React doesn't warn about rendering a <script>.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
