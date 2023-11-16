


const Footer = () => {
    return (
        <footer>
            <div className="flex text-white">
                <div className="bg-[#1F2937] flex-1 text-center py-20">
                    <h1 className="text-3xl font-medium pb-6">CONTACT US</h1>
                    <p className="text-xl font-medium">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-xl font-medium">+88 123456789</p>
                    <p className="text-xl font-medium">Mon - Fri: 08:00 - 22:00<br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] flex-1 text-center py-20">
                    <h1 className="text-3xl font-medium pb-6">Follow US</h1>
                    <p className="text-xl font-medium">Join us on social media</p>
                </div>
            </div>
            <aside className="text-center py-4 bg-[#151515]">
                <p className="text-white">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;