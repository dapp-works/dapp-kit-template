'use client';

import { observer, useLocalObservable } from 'mobx-react-lite';
const JSONMetricsView = dynamic(() => import('@dappworks/kit/metrics').then((t) => t.JSONMetricsView), { ssr: false });
import dynamic from 'next/dynamic';

export default observer(({ data }: any) => {
  return (
    <JSONMetricsView
      data={[
        {
          type: 'KPICard',
          title: 'Data Messages',
          description: 'Total number of messages received from all devices',
          data: new Array(30).fill(0).map((_, i) => ({
            date: new Date(2021, 0, i + 1).toISOString(),
            SemiAnalysis: Math.floor(Math.random() * 100),
            'The Pragmatic Engineer': Math.floor(Math.random() * 100),
          })),
          index: 'date',
          categories: ['SemiAnalysis', 'The Pragmatic Engineer'],
          metricTitle: 'Total Events',
          metric: 124,
          chartType: 'area',
        },
      ]}
    />
  );
});
