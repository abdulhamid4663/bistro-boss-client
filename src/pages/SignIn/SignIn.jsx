import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if (validateCaptcha(captcha) !== true) {
            alert('Captcha is Not Matched');
            return;
        }

        loginUser(email, password)
            .then(() => {
                alert('successfully logged in');
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full max-w-[1800px] flex-col lg:flex-row border shadow-2xl p-20">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <h1 className="text-center text-[#151515] text-[40px] font-bold">Login</h1>
                    <form onSubmit={handleOnSubmit} className="card-body">
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
                        <div className="form-control">
                            <LoadCanvasTemplate />
                        </div>
                        <div className="form-control mb-6">
                            <input type="text" name="captcha" placeholder="Type here..." className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054B2] text-white text-xl font-bold">Sign In</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-[#D1A054] text-xl font-medium mb-6">New here? <Link to="/signUp" className="font-bold">Create a New Account</Link></p>
                        <p className="text-[#444] text-xl font-medium">Or sign in with</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;