import { Container } from './styles'
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate();
   return (<>
      <Container />
      <div>Aqui é o login</div>

   </>)
}
export { Login };
