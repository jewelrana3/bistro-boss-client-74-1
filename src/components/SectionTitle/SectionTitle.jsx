

const SectionTitle = ({heading,subHeading,}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto mb-4">
            <p className="text-center text-orange-600 mb-2">---{subHeading}---</p>
            <h3 className="uppercase text-4xl border-y-4 py-4" >{heading}</h3>
        </div>
    );
};

export default SectionTitle;