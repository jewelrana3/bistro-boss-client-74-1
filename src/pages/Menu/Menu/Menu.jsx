import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import coverImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladsImg from '../../../assets/menu/salad-bg.jpg';
import soupsImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const salads = menu.filter(item=> item.category === 'salad')
    const soups = menu.filter(item=> item.category === 'soups')
    const offered = menu.filter(item=> item.category === 'offered')
   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title='our menu'></Cover>
            <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory item={pizza} title='pizza' img={pizzaImg}></MenuCategory>
            <MenuCategory item={salads} title='salad' img={saladsImg}></MenuCategory>
            <MenuCategory item={soups} title='soups' img={soupsImg}></MenuCategory>
        </div>
    );
};

export default Menu;