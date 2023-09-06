'use client';
import { JSONMetricsView, JSONSchemaTableState, JSONTable, PaginationState } from "@dappworks/jsonview"
import { trpc } from "./components/trpc_provider";

const table = new JSONSchemaTableState({
  columns: [{
    key: "nonce",
    label: "NONCE",
  }, {
    key: "destination",
    label: "DESTINATION"
  }],
  dataSource: new Array(100).fill(0).map((_, i) => ({
    nonce: i,
    destination: '0x' + Math.floor(Math.random() * 100
    ).toString(16),
  })),
  rowKey: "id",
  pagination: new PaginationState({
    page: 1,
    limit: 8
  }),
})

export default function HomePage() {
  // let { data: users, isLoading, isFetching } = trpc.user.isSuperAdmin.useQuery({
  //   userId: '1',
  // });
  // console.log(users);
  return (
    <main className="p-10">
      <JSONMetricsView data={[{
        type: 'KPICard',
        title: 'Data Messages',
        description: 'Total number of messages received from all devices',
        data: new Array(30).fill(0).map((_, i) => ({
          date: new Date(2021, 0, i + 1).toISOString(),
          SemiAnalysis: Math.floor(Math.random() * 100),
          'The Pragmatic Engineer': Math.floor(Math.random() * 100),
        })),
        index: 'date',
        categories: ["SemiAnalysis", "The Pragmatic Engineer"],
        metricTitle: 'Total Events',
        metric: 124,
        chartType: 'area',
      }]} />
      <JSONTable jsonstate={{ table }} className='mt-2'></JSONTable>
    </main>
  );
}
