import React from 'react'
import img1 from "../img/feature1.png"
import img2 from "../img/feature2.png"
import img3 from "../img/feature3.png"
const FeaturePage = () => {
    return (
        <>
            <div className='bg-white flex justify-around items-center '>
                <div className='flex flex-col justify-center w-1/3'>
                    <h1 className='text-7xl font-medium mb-4 whitespace-normal bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>
                        Thêm nhiều cách
                        giữ kết nối
                    </h1>
                    <p className='font-light text-xl'>
                        Messenger có tất cả mọi thứ bạn cần để cảm thấy gần gũi hơn với những người thân yêu.
                    </p>
                </div>

                <div className='w-1/2'>
                    <img
                        src={img1}
                        className='object-contain h-80 lg:h-96 xl:h-full'
                        alt='Hình ảnh'
                    />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center '>
                <div className='text-center w-1/2'>
                    <p className='font-light'>GIAO TIẾP LIÊN ỨNG DỤNG</p>
                    <h1 className='text-6xl font-semibold mb-4 whitespace-normal '>
                        Tụ họp với những người thân yêu trên các ứng dụng và thiết bị mình yêu thích
                    </h1>
                </div>
                <div className='w-1/2'>
                    <p className='text-center text-xl font-light'>
                        Messenger tiếp lửa cho các cuộc trò chuyện trong Facebook, Instagram, Portal và Oculus (sắp ra mắt).
                    </p>
                </div>

                <div className='w-1/3 mt-4'>
                    <img src={img2} />
                </div>


            </div>

            <div className='flex justify-around '>


                <div className='flex flex-col justify-center w-96'>
                    <p>Xem cùng nhau</p>
                    <h1 className='text-6xl font-medium mb-4 whitespace-normal '>
                        Thưởng thức video cùng bạn bè
                    </h1>
                    <h1 className='font-light' >Xem phim, video ca nhạc, chương trình TV và hơn thế nữa cùng bạn bè thông qua tính năng chat video.</h1>

                </div>
                <div className='w-1/3'>
                    <img
                        src={img3}
                        className='object-contain h-80 lg:h-96 xl:h-full'
                        alt='Hình ảnh'
                    />
                </div>
            </div>


        </>
    )
}

export default FeaturePage;