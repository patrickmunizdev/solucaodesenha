import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { ContainerLogin, FormLogin, TitleLogin } from './styles';

const Login = ({ IFormData }: any) => {
   const navigate = useNavigate();
   return (
      <>
         <ContainerLogin>
            <FormLogin>
               <div>
                  <TitleLogin>SGA</TitleLogin>
               </div>
               <div>
                  <Input />
               </div>
               <div>
                  <Input />
               </div>
            </FormLogin>
         </ContainerLogin>
      </>
   )
}
export { Login };

