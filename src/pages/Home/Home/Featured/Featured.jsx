import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../.././../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed mt-10   my-20'>
            <SectionTitle
            subHeading='Cheak It Item'
            heading='Featured Items'
            ></SectionTitle>
            <div className='md:flex justify-center bg-opacity-60 bg-slate-400  items-center py-10 px-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='ml-10'>
                    <p>23 March,2024</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti aliquam corrupti repellendus incidunt sint reiciendis aperiam quia veritatis, ipsum alias saepe culpa fuga sunt vitae, sapiente quo dolorum. Quae sequi, consectetur fuga suscipit consequuntur cumque deleniti hic temporibus id!</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;