"use client"

import { observer, useLocalObservable } from "mobx-react-lite";
import dynamic from "next/dynamic";
const JSONTable = dynamic(() => import('@dappworks/jsonview').then(t => t.JSONTable), { ssr: false })

const Client = observer(({ data }: any) => {
  return <JSONTable
    rowKey='id'
    dataSource={[{
      name: 'test',
      age: '123'
    }]}
    columnOptions={{
      name: {
        label: "name"
      }
    }}
  />
})

export default Client;