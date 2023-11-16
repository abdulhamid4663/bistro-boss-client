/* eslint-disable react/prop-types */
import backgroundImg from "../../../assets/home/chef-service.jpg"

const SectionBanner = ({ title, text }) => {
    const bgStyle = {
        backgroundImage: `url('${backgroundImg}')`,
        width: '100%',
        height: '700px',
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
    };

    return (
        <div style={bgStyle}>
            <div className='flex justify-center items-center h-[700px]'>
                <div className="bg-[#15151599] py-20 w-[1096px] mx-auto text-center">
                    <h1 className={`text-[45px] font-normal text-white`}>{title}</h1>
                    <p className={`text-base font-normal text-white max-w-[841px] mx-auto`}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionBanner;