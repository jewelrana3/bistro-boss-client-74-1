import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({ item, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid sm:grid-cols-2 gap-10 mt-20 mb-10">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-primary">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;