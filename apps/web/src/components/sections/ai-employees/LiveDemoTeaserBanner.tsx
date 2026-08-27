import { Badge } from "@/components/ui/Badge";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function LiveDemoTeaserBanner() {
  return (
    <GlassPanel className="border-dashed text-center">
      <div className="flex flex-col items-center gap-3 py-4">
        <Badge icon={<span className="size-2 rounded-full bg-primary" />}>
          Live demo &middot; coming soon
        </Badge>
        <p className="text-sm text-muted">
          Try a real AI Employee, right on this page.
        </p>
      </div>
    </GlassPanel>
  );
}
