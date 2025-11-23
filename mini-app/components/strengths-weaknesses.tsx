"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function StrengthsWeaknesses() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Strengths & Weaknesses</CardTitle>
        <CardDescription>Insights derived from public data.</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Strengths</h3>
        <ul className="list-disc pl-5">
          <li>Comprehensive data coverage</li>
          <li>Real‑time updates</li>
          <li>Open source integration</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Weaknesses</h3>
        <ul className="list-disc pl-5">
          <li>Limited to publicly available data</li>
          <li>Potential data inaccuracies</li>
          <li>Requires manual validation</li>
        </ul>
      </CardContent>
    </Card>
  );
}
