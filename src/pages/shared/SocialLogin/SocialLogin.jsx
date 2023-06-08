import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin=()=>{
        googleSignIn()
        .then(result =>{
            const logUser = result.user;
            console.log(logUser)
            const saveUser = {name:logUser.name,email:logUser.email}
            fetch('http://localhost:4000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from,{replace:true})
                  
        })
    });
}
    return (
        <div>
            <div className="divide"></div>
            <div className="text-center my-2">
                <button onClick={handleLogin} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};


export default SocialLogin;