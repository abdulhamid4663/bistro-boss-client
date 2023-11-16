import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Social from "../../components/Shared/Social/Social";

const SignUp = () => {
    const { createUser } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate()

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {
            name,
            email,
        }

        createUser(email, password)
        .then(()=> {
            alert("successfully registered");
            axios.post("/users", userInfo)
            .then(res => {
                console.log(res.data);
            })
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full max-w-[1800px] flex-col lg:flex-row-reverse border shadow-2xl p-20">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <h1 className="text-center text-[#151515] text-[40px] font-bold">Sign Up</h1>
                    <form onSubmit={handleOnSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054B2] text-white text-xl font-bold">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-[#D1A054] text-xl font-medium mb-6">Already registered? <Link to="/signIn" className="font-bold">Go to log in</Link></p>
                        <p className="text-[#444] text-xl font-medium">Or sign up with</p>
                    </div>
                    <div className="p-[2rem]">
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;