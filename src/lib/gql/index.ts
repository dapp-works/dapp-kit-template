import { createClient } from './generated';
import { createClient as createIopayClient } from './iopay';

export const gql = createClient({
  url: 'https://api.iotexscan.io/v1/graphql',
});

//npx @genql/cli --endpoint https://iopay-api.iotex.io/v1/graphql --output ./src/lib/gql/iopay
export const iopay = createIopayClient({
  url: 'https://iopay-api.iotex.io/v1/graphql',
})
