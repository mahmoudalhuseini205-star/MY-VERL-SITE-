import { ViewTransition } from "react";

// Page-level view transition (DESIGN.md §6, effect 10). Lives in each page, never in the layout,
// so page enter/exit can fire. Links tagged "nav-forward" / "nav-back" slide; everything else crossfades.
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}
