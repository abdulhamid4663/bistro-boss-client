/* eslint-disable react/prop-types */

const SectionHeading = ({ subTitle, title }) => {
    return (
        <div className="max-w-md mx-auto text-center mb-12">
            <h3 className="text-[#D99904] text-xl italic pb-4">{subTitle}</h3>
            <h1 className="text-[#151515] text-[40px] py-2 border-y-2">{title}</h1>
        </div>
    );
};

export default SectionHeading;