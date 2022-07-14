import styled from 'styled-components';
import ContainedButtons from '../components/ContainedButtons';
import StyledButton from '../components/StyledButton';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 8px;
`;

export default function Home(): JSX.Element {
  return (
    <Layout>
      <ContainedButtons />
      <StyledButton />
    </Layout>
  );
}
