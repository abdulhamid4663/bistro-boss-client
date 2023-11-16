/* eslint-disable react/prop-types */

import Container from "../Container/Container";


const PageBanner = ({ bgImage, title }) => {
    const bgStyle = {
        backgroundImage: `url('${bgImage}')`,
        height: '800px',
        width: '100%'
    }

    return (
        <div style={bgStyle}>
            <Container>
                <div className="flex h-[800px] justify-center items-end">
                    <div className="flex flex-col h-[450px] justify-center items-center w-full mb-32 bg-[#15151599] text-white">
                        <h1 className="text-7xl font-bold pb-4">{title}</h1>
                        <p className="text-xl font-semibold">Would you like to try a dish?</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageBanner;