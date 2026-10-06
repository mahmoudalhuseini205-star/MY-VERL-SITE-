"use client";

import { Fragment, useRef } from "react";
import { useLoopGate } from "./useLoopGate";

// Small three-node flow on a capability panel: an Ember packet runs each segment in turn (CSS, see .mf-run).
// Horizontal when its container is ≥ 26rem wide, vertical otherwise. Paused off-screen; hidden for reduced motion.
export function MiniFlow({ nodes }: { nodes: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const running = useLoopGate(ref);
  return (
    <div ref={ref} data-running={running} aria-hidden className="@container">
      <div className="flex flex-col @[26rem]:flex-row @[26rem]:items-center">
        {nodes.map((n, i) => (
          <Fragment key={n}>
            {i > 0 && (
              <span className="relative ms-[1.3rem] h-8 w-px bg-border @[26rem]:ms-0 @[26rem]:h-px @[26rem]:w-auto @[26rem]:flex-1">
                <span className="mf-run absolute inset-0" data-seg={i - 1}>
                  <span className="absolute top-0 start-0 size-2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                </span>
              </span>
            )}
            <span className="t-label inline-flex items-center gap-2 self-start rounded-full border border-border bg-bg px-3 py-2 whitespace-nowrap @[26rem]:self-auto">
              <span className={`size-1.5 rounded-full ${i === nodes.length - 1 ? "bg-accent" : "bg-text/30"}`} />
              {n}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
