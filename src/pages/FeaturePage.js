import React from 'react';


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
                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.8562-6/122232591_380123473031320_5356914086841513506_n.png?_nc_cat=104&ccb=1-7&_nc_sid=f537c7&_nc_ohc=gJQbeX-ItMQAX_7HGvL&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB2jVuIFvDKDH5jAzkDyAznxmwN-fbbgj3QRSqJt0B7dg&oe=657BEDAD"
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
                    <img src='https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.8562-6/122327939_2741885309464391_8207873556820675575_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=cNHGT9NfcoIAX-XpFYM&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBjOc_F74nxq-Fbu59v_g5r0AMIYqBRfC4HgI8OahgnOg&oe=657C9AD9' />
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
                <div className=''>
                    <video
                        src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.2365-6/121102663_1399766040228533_8301866763324278610_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=0ZjQLebf0fIAX9CL0bR&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCoHp_EeYgD_6Htk1vvWTzNSeDzPMEAT4U7QwTJ6R1meg&oe=6591442B"
                        className='object-contain h-80 lg:h-96 xl:h-full'
                        alt='Hình ảnh'
                    />
                </div>
            </div>


        </>
    );
};

export default FeaturePage;