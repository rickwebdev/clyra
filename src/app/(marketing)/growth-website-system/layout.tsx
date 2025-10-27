import type { Metadata } from "next";
import { growthPageMetadata } from "./metadata";

export const metadata: Metadata = growthPageMetadata;

export default function GrowthWebsiteSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}