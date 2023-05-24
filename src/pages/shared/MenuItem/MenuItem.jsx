

const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className="flex space-x-2 mt-6 mb-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="text-2xl uppercase">{name}---------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;