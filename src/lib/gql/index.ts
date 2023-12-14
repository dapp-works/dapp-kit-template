import { createClient } from './generated';

export const gql = createClient({
  url: 'https://api.iotexscan.io/v1/graphql',
});
