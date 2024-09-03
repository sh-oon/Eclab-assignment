// src/hooks/useSummaryCounts.ts
import {useMemo} from 'react';
import {Summary} from "@/hooks/summary/useSummary.types";
import {ecTypeToSummaryTitleMap} from "@/hooks/summary/useSummary.variable";
import {EcDb, EcReportItem} from "@/types/response";

export const summary: Summary = [
  [
    {icon: '✍️', title: 'Writing Competition'},
    {icon: '🏆', title: 'Competition'}
  ],
  [
    {icon: '🏫', title: 'Pre-College'},
    {icon: '💼', title: 'Internship'}
  ],
  [
    {icon: '⛑️', title: 'Volunteering'},
    {icon: '🔎', title: 'Research'}
  ]
];

export function useSummaryCounts(ecReportItems: EcReportItem[]) {
  return useMemo(() => {
    const counts = summary.flat().reduce((acc, {title}) => {
      acc[title] = 0;
      return acc;
    }, {} as Record<string, number>);

    ecReportItems.forEach(({ec_db}: { ec_db: EcDb }) => {
      const mappedTitle = ecTypeToSummaryTitleMap[ec_db.ec_type];
      if (mappedTitle && counts.hasOwnProperty(mappedTitle)) {
        counts[mappedTitle] += 1;
      }
    });

    return counts;
  }, [ecReportItems]);
}
