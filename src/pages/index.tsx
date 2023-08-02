import Container from '@/components/Layout/Container';
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next';

const HomePage: NextPage = observer(() => {
  return <Container className="p-0 lg:p-0">Welcome</Container>;
});

export default HomePage;

HomePage.defaultProps = {
  useAuth: false,
};
