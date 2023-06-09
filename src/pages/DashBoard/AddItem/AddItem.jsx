import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
       const formData = new FormData();
       formData.append('image',data.image[0])

       fetch(image_hosting_url,{
        method:'POST',
        body:formData
       })
       .then(res=>res.json())
       .then(dataRes => {
        if(dataRes.success){
            const imgUrl = dataRes.data.display_url;
            const {name,price,category,recipe} = data;
            const navItem = {name,price:parseFloat(price),category,recipe,image:imgUrl}
            console.log(navItem);
            
            axiosSecure.post('/menu',navItem)
            .then(data=>{
                console.log('api res right work',data.data)
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Item added succesFull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
       })
       
    }
    
   
    return (
        <div className="w-full px-8">
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder="Recipe name" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-4 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue='Pick One' {...register("category", { required: true, maxLength: 80 })} className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salads</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true, maxLength: 80 })} placeholder="number" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                        {...register("recipe", { required: true, maxLength: 80 })}
                        placeholder="Bio"></textarea>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Images*</span>
                    </label>
                    <input type="file" {...register("image", { required: true, maxLength: 80 })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;