import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";



const OrderCard = ({item}) => {
    const { name, recipe, image,price,_id } = item;
    const {user} = useContext(AuthContext)
    const [,refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation()

    const handleToCart=item=>{
        console.log(item)
        if(user && user?.email){
            const cartItem = {menuItem : _id,image,price,name,email:user?.email}
            fetch('http://localhost:4000/carts',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
                
                if(data.insertedId){
                    refetch() // cart to update the items
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Item Food Cart Added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Add To Cart Now?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-600 absolute right-0 text-white mt-4 mr-6 px-6">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleToCart(item)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;