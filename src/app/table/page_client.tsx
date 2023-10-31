'use client';

import { observer, useLocalObservable } from 'mobx-react-lite';
const JSONTable = dynamic(() => import('@dappworks/kit/form').then((t) => t.JSONTable), { ssr: false });
import dynamic from 'next/dynamic';

export default observer(({ data }: any) => {
  return (
    <JSONTable
      rowKey="id"
      dataSource={[
        {
          name: 'test',
          age: '123',
        },
      ]}
      columnOptions={{
        name: {
          label: 'name',
        },
      }}
    />
  );
});
