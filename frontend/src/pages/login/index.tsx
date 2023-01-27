import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

const Login = () => {
   const navigate = useNavigate();
   return (<>
      <Container />
      <div>Aqui é o login</div>

   </>)
}
export { Login };
