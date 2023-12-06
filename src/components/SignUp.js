import React from 'react'
const backgroundImageUrl = 'https://www.shutterstock.com/image-vector/vector-seamless-mobile-apps-pattern-600nw-283356059.jpg';
const SignUp = () => {
    return (
        <>
            <section style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=4zNcBpbRM_IAX8O-5l2&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDCyNClLJqUpArTVI86EeuDm2l5rmtfUZFIQJ6vZl9Aeg&oe=6574E5BD" class="h-8" alt="Flowbite Logo" />

                    </a>
                    <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-pink-500 to-orange-400 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <div className='flex justify-center'>
                                <p className='text-2xl font-medium text-gray-900 dark:text-white'>Đăng ký</p>
                            </div>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tài khoản</label>
                                    <input class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg  block w-full p-2.5 focus:outline-none   dark:placeholder-gray-400 text-black" placeholder="Nhập tên tài khoản" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border focus:outline-none  border-gray-300  sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 text-black" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập lại mật khẩu</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border focus:outline-none  border-gray-300  sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 text-black" required="" />
                                </div>
                                <div className='flex justify-center'>
                                    <button type="submit" class="w-1/2  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white ">Đăng ký</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp