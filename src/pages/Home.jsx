import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from "react-icons/io";
import home from "../img/home1.png";

const Home = () => {
    return (
        <div className='bg-white flex justify-around items-center h-screen p-56'>
            <div className='flex flex-col justify-center'>
                <div>
                    <h1 className='text-6xl font-semibold mb-4 whitespace-normal'>Tụ họp mọi lúc, mọi ngơi</h1>
                </div>

                <h2 className='font-medium mb-4 text-gray-400 whitespace-normal'>Với Chat-Real-Time việc kết nối với những người mình yêu mến thật đơn giản và thú vị.</h2>

                <div className='mb-4'>
                    <Link to='login'>
                        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center">
                            <svg className="fill-current w-5 h-5 mr-2"><IoMdLogIn size={20} className='font-extrabold' /></svg>
                            <span>Đăng nhập ngay</span>
                        </button>
                    </Link>
                </div>

                <div>
                    <p>Nếu chưa có tài khoản ? <Link to='register' className='text-pink-700 hover:text-purple-700'>Đăng ký ngay</Link></p>
                </div>
            </div>

            <div className='w-full h-auto'>
                <img
                    src={home}
                    className='object-contain h-80 lg:h-96 xl:h-full'
                    alt='Hình ảnh'
                />
            </div>
        </div>
    )
}

export default Home;