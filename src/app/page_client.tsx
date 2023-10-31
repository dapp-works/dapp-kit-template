'use client';

import { observer, useLocalObservable } from 'mobx-react-lite';
const JSONMetricsView = dynamic(() => import('@dappworks/kit/metrics').then((t) => t.JSONMetricsView), { ssr: false });
import dynamic from 'next/dynamic';
import { FormPlugin, JSONForm, JSONTable, getComplexFormData } from '@dappworks/kit/form';
import { RootStore } from '@dappworks/kit';
import { useEffect } from 'react';

export default observer(({ data }: any) => {
  useEffect(() => {});
  return (
    <div>
      <JSONForm formData={{ foo: { bar: 1 } }} />
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
    </div>
  );
});
