"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { List, ListItem } from "@/components/ui/list";

export default function StrengthsWeaknesses() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Strengths & Weaknesses</CardTitle>
        <CardDescription>Insights derived from public data.</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Strengths</h3>
        <List>
          <ListItem>Comprehensive data coverage</ListItem>
          <ListItem>Real‑time updates</ListItem>
          <ListItem>Open source integration</ListItem>
        </List>
        <h3 className="text-lg font-semibold mt-4 mb-2">Weaknesses</h3>
        <List>
          <ListItem>Limited to publicly available data</ListItem>
          <ListItem>Potential data inaccuracies</ListItem>
          <ListItem>Requires manual validation</ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
