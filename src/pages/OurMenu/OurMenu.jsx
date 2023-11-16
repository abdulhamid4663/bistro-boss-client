import PageBanner from "../../components/Shared/PageBanner/PageBanner";
import bannerImg from "../../assets/menu/banner3.jpg"
import SectionHeading from "../../components/Shared/Section_Heading/SectionHeading";
import MenusSection from "../../components/Shared/MenusSection/MenusSection";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";

const OurMenu = () => {
    return (
        <div>
            <div className="mb-32">
                <PageBanner bgImage={bannerImg} title="OUR MENU" />
            </div>
            {/* Today's Offer Section */}
            <div>
                <div>
                    <SectionHeading subTitle="---Don't miss---" title="TODAY'S OFFER" />
                </div>
                <div>
                    <MenusSection category="offered" />
                </div>
            </div>
            {/* Desserts Section */}
            <div>
                <div className="mb-32">
                    <SectionBanner title="DESSERTS" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </div>
                <div>
                    <MenusSection category='dessert' />
                </div>
            </div>
            {/* Pizzas Section */}
            <div>
                <div className="mb-32">
                    <SectionBanner title="PIZZAS" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </div>
                <div>
                    <MenusSection category='pizza' />
                </div>
            </div>
            {/* Salads Section */}
            <div>
                <div className="mb-32">
                    <SectionBanner title="SALADS" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </div>
                <div>
                    <MenusSection category='salad' />
                </div>
            </div>
            {/* Soups Section */}
            <div>
                <div className="mb-32">
                    <SectionBanner title="SOUPS" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </div>
                <div>
                    <MenusSection category='soup' />
                </div>
            </div>
        </div>
    );
};

export default OurMenu;