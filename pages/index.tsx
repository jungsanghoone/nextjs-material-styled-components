import styled from 'styled-components';
import ContainedButtons from '../components/ContainedButtons';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default function Home(): JSX.Element {
  return (
    <Layout>
      <ContainedButtons />
    </Layout>
  );
}
