
import { Link } from 'react-router-dom';
import errorImg from '../src/assets/error/404.gif'
const ErrorPage = () => {
    return (
        <div>
           <img src={errorImg} alt="" />
           <Link to='/'>Go To Back</Link>
        </div>
    );
};

export default ErrorPage;