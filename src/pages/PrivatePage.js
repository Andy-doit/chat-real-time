import React from 'react'
import { Link } from 'react-router-dom'
const PrivatePage = () => {
    return (
        <div className='bg-white flex justify-around items-center h-screen '>
            <div className='flex flex-col justify-center'>
                <h1 className='text-6xl font-semibold mb-4 whitespace-normal'>Tự tin kết nối</h1>
            </div>

            <div className=''>
                <img
                    src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.8562-6/284317367_694622184939930_5262263590454519189_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=ibt2XY0xZ1cAX8ds_Yg&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfA4BltZMdXiLE_GJExMMdnXMeKc6GLptqVM7YLVichVOw&oe=657585E1"
                    className='object-contain h-80 lg:h-96 xl:h-full'
                    alt='Hình ảnh'
                />
            </div>
        </div>
    )
}

export default PrivatePage