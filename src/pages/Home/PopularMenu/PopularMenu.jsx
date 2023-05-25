
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular')
    
    return (
        <section>
            <SectionTitle
            subHeading='Cheak It Out'
            heading='from our menu'
            ></SectionTitle>
            <div className="grid sm:grid-cols-2 gap-10">
                {
                    popular.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;