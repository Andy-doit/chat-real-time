import React from 'react'

const Header = () => {
    return (
        <>
            <nav class="bg-white ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=4zNcBpbRM_IAX8O-5l2&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDCyNClLJqUpArTVI86EeuDm2l5rmtfUZFIQJ6vZl9Aeg&oe=6574E5BD" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>

                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  ">
                            <li>
                                <a href="#" class="block py-2 px-3  text-black rounded md:bg-transparent" aria-current="page">Tính Năng</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3  text-black rounded md:bg-transparent" aria-current="page">Quyền riêng tư và an toàn</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3  text-black rounded md:bg-transparent" aria-current="page">Dành cho nhà phát triển</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header