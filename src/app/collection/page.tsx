import { Suspense } from "react";
import CollectionClient from "@/components/CollectionClient";

export default function Collection() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-10 text-ink/60">Loading collection…</div>}>
      <CollectionClient />
    </Suspense>
  );
}
