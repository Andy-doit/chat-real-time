import React from 'react'
import { IoSettings } from "react-icons/io5";
import { ImBlocked } from "react-icons/im";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import img1 from '../img/private1.png'
import img2 from '../img/private3.png'
import video1 from '../img/private2.mp4'
const MiniMenu = [
    {
        Tilte: 'Cài đặt',
        Icon: <IoSettings />,

    },
    {
        Tilte: 'Chặn',
        Icon: <ImBlocked />,
    },
    {
        Tilte: 'Báo Cáo',
        Icon: < FaExclamationTriangle />,
    },
    {
        Tilte: 'Lưu ý an toàn',
        Icon: <FaBell />,
    },
    {
        Tilte: 'Khoá ứng dụng',
        Icon: <FaLock />,
    },
    {
        Tilte: 'Mã hoá đầu cuối',
        Icon: <FaLock />,
    },
]
const in4Menu = [
    {
        Tilte: 'Sử dụng Messenger theo cách của bạn.',
        Content: 'Bạn quyết định tin nhắn của ai được vào danh sách Chat, ai vào thư mục Tin nhắn đang chờ và ai hoàn toàn không thể nhắn tin hoặc gọi điện cho mình. Nhờ tính năng Cài đặt quyền riêng tư, bạn có thể kiểm soát việc gửi tin nhắn, người liên hệ đã bị chặn, Khóa ứng dụng, Cuộc trò chuyện bí mật, đối tượng xem tin và tin bạn đã tắt ở cùng một chỗ.',
        Button: 'Tìm hiểu thêm',
        Src: 'https://video.fsgn2-3.fna.fbcdn.net/v/t42.1790-2/240424521_2038359729636454_3687447738130646779_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=xpZhD2rtIZIAX_olFNb&rl=300&vabr=42&_nc_ht=video.fsgn2-3.fna&oh=00_AfCElOcLcvWtf8qUYeFLVm2l7XUmOIe4Q9lXJh49gsdABQ&oe=6579FFBB'
    },
    {
        Tilte: 'Chặn tin nhắn hoặc cuộc gọi không mong muốn.',
        Content: 'Nếu bị ai đó làm phiền, bạn có thể chặn họ và bất kỳ tài khoản mới nào mà họ tạo. Chúng tôi sẽ không cho họ biết bạn đã chặn họ.',
        Button: 'Tìm hiểu thêm',
        Src: 'https://video.fsgn2-10.fna.fbcdn.net/v/t42.1790-2/240423323_597473268286555_126148338507984374_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=QLG0DPm_YfkAX9IzZ_p&rl=300&vabr=63&_nc_ht=video.fsgn2-10.fna&oh=00_AfACeWxRgW_0RZiVnubg0tQWf-EhTjegXAkONZt7cMe9hw&oe=65792F71'
    },
    {
        Tilte: 'Hãy cùng chúng tôi giữ an toàn cho cộng đồng.',
        Content: 'Bạn hãy báo cáo nếu bắt gặp hành vi hoặc nội dung có thể gây hại, chẳng hạn như quấy rối hoặc mạo danh. Nếu nhận thấy trường hợp này vi phạm Tiêu chuẩn cộng đồng, chúng tôi sẽ thực hiện biện pháp phù hợp, trong đó có vô hiệu hóa tài khoản hoặc giới hạn khả năng nhắn tin của họ.',
        Button: 'Tìm hiểu thêm',
        Src: 'https://video.fsgn2-3.fna.fbcdn.net/v/t42.1790-2/240424521_2038359729636454_3687447738130646779_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=xpZhD2rtIZIAX_olFNb&rl=300&vabr=42&_nc_ht=video.fsgn2-3.fna&oh=00_AfCElOcLcvWtf8qUYeFLVm2l7XUmOIe4Q9lXJh49gsdABQ&oe=6579FFBB'
    },
    {
        Tilte: 'Có ngay thông tin khi bạn cần.',
        Content: 'Nếu bị ai đó làm phiền, bạn có thể chặn họ và bất kỳ tài khoản mới nào mà họ tạo. Chúng tôi sẽ không cho họ biết bạn đã chặn họ.',
        Button: 'Tìm hiểu thêm',
        Src: 'https://video.fsgn2-10.fna.fbcdn.net/v/t42.1790-2/240423323_597473268286555_126148338507984374_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=QLG0DPm_YfkAX9IzZ_p&rl=300&vabr=63&_nc_ht=video.fsgn2-10.fna&oh=00_AfACeWxRgW_0RZiVnubg0tQWf-EhTjegXAkONZt7cMe9hw&oe=65792F71'
    },
    {
        Tilte: 'Tăng cường bảo mật.',
        Content: 'Nếu bị ai đó làm phiền, bạn có thể chặn họ và bất kỳ tài khoản mới nào mà họ tạo. Chúng tôi sẽ không cho họ biết bạn đã chặn họ.',
        Button: 'Tìm hiểu thêm',
        Src: 'https://video.fsgn2-10.fna.fbcdn.net/v/t42.1790-2/240423323_597473268286555_126148338507984374_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=QLG0DPm_YfkAX9IzZ_p&rl=300&vabr=63&_nc_ht=video.fsgn2-10.fna&oh=00_AfACeWxRgW_0RZiVnubg0tQWf-EhTjegXAkONZt7cMe9hw&oe=65792F71'
    },
    {
        Tilte: 'Chọn mã hóa đầu cuối đoạn chat và cuộc gọi.',
        Content: 'Nếu bị ai đó làm phiền, bạn có thể chặn họ và bất kỳ tài khoản mới nào mà họ tạo. Chúng tôi sẽ không cho họ biết bạn đã chặn họ.',
        Button: 'Tìm hiểu thêm',
        Src: 'https://video.fsgn2-10.fna.fbcdn.net/v/t42.1790-2/240423323_597473268286555_126148338507984374_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=QLG0DPm_YfkAX9IzZ_p&rl=300&vabr=63&_nc_ht=video.fsgn2-10.fna&oh=00_AfACeWxRgW_0RZiVnubg0tQWf-EhTjegXAkONZt7cMe9hw&oe=65792F71'
    },

]
const cardIn4 = [
    {
        tilte: 'Ngăn chặn mối nguy hại "từ trong trứng nước"',
        content: 'Cách tốt nhất để giữ an toàn cho mọi người là ngăn chặn mối nguy hại diễn ra ngay từ đầu.',
    },
    {
        tilte: 'Cung cấp cho bạn thêm lựa chọn và quyền kiểm soát"',
        content: 'Không chỉ nỗ lực ngăn chặn mối nguy hại, chúng tôi còn mang đến thêm cho bạn quyền kiểm soát hộp thư tin nhắn để tạo ra vô số trải nghiệm mong muốn.',
    },
    {
        tilte: 'Tận tình phản hồi',
        content: 'Chúng tôi phản hồi ngay khi phát hiện ra hành vi lạm dụng/lăng mạ/ngược đãi tiềm ẩn trên các dịch vụ của mình. Cụ thể, chúng tôi sẽ thực thi Tiêu chuẩn cộng đồng, chia sẻ dữ liệu với NCMEC và các cơ quan hành pháp.',
    },
]
const PrivatePage = () => {
    return (
        <>
            <div className='bg-white flex justify-around items-center '>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-7xl font-medium mb-4 whitespace-normal bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>
                        Tự tin kết nối
                    </h1>
                </div>

                <div className=''>
                    <img
                        src={img1}
                        className='object-contain h-80 lg:h-96 xl:h-full'
                        alt='Hình ảnh'
                    />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center '>
                <div className='text-center w-1/2'>
                    <h1 className='text-6xl font-semibold mb-4 whitespace-normal '>
                        Cởi mở theo cách bạn muốn - riêng tư, an toàn, đầy tự tin
                    </h1>
                </div>
                <div className='w-1/2'>
                    <p className='text-center text-xl font-light'>
                        Bạn xứng đáng có được trải nghiệm nhắn tin an toàn và riêng tư để bộc
                        lộ bản thân theo cách bạn muốn, với người bạn muốn.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className=' flex flex-col  items-start '>
                    {MiniMenu.map((item) => (
                        <>
                            <button>
                                <span className='flex mt-4'>
                                    <button className='rounded-full flex justify-center items-center w-8 h-8 text-white bg-gray-500 mr-3'>{item.Icon}</button>
                                    <p className='font-medium text-gray-500 text-1xl uppercase'>{item.Tilte}</p>
                                </span>
                            </button>
                        </>
                    ))}
                </div>

                <div className='flex items-center'>
                    <div >
                        <video className='w-96' src={video1} playsinline />
                    </div>
                    <div className='w-60'>
                        <h1 className='text-4xl text-left' >Sử dụng  Realtime theo cách của bạn.</h1>

                        <div>
                            <span className=''>
                                <h1 className='font-light' >Bạn quyết định tin nhắn của ai được vào danh sách Chat, ai vào thư mục Tin nhắn đang chờ và ai hoàn toàn không thể nhắn tin hoặc gọi điện cho mình. Nhờ tính năng Cài đặt quyền riêng tư, bạn có thể kiểm soát việc gửi tin nhắn, người liên hệ đã bị chặn, Khóa ứng dụng, Cuộc trò chuyện bí mật, đối tượng xem tin và tin bạn đã tắt ở cùng một chỗ.</h1>
                                <button className="text-white mt-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center">Tìm hiểu thêm</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-around '>

                <div className='w-2/4 h-auto'>
                    <img
                        src={img2}
                        className='object-contain h-80 lg:h-96 xl:h-full'
                        alt='Hình ảnh'
                    />
                </div>
                <div className='flex flex-col justify-center w-96'>
                    <p>Bảo vệ thông tin của bạn</p>
                    <h1 className='text-6xl font-medium mb-4 whitespace-normal '>
                        Tin nhắn của bạn là của bạn.
                    </h1>
                    <h1 className='font-light' >Bạn quyết định tin nhắn của ai được vào danh sách Chat, ai vào thư mục Tin nhắn đang chờ và ai hoàn toàn không thể nhắn tin hoặc gọi điện cho mình. Nhờ tính năng Cài đặt quyền riêng tư, bạn có thể kiểm soát việc gửi tin nhắn, người liên hệ đã bị chặn, Khóa ứng dụng, Cuộc trò chuyện bí mật, đối tượng xem tin và tin bạn đã tắt ở cùng một chỗ.</h1>
                    <div>
                        <button className="text-white mt-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center">Tìm hiểu thêm</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <div className='w-1/2'>
                    <p className='text-center text-xl font-light'>
                        Bạn xứng đáng có được trải nghiệm nhắn tin an toàn và riêng tư để bộc
                        lộ bản thân theo cách bạn muốn, với người bạn muốn.
                    </p>
                </div>
                <div className='text-center w-1/2'>
                    <h1 className='text-6xl font-semibold mb-4 whitespace-normal '>
                        Cởi mở theo cách bạn muốn - riêng tư, an toàn, đầy tự tin
                    </h1>
                </div>
                <div className='w-1/2'>
                    <p className='text-center text-xl font-light'>
                        Bạn xứng đáng có được trải nghiệm nhắn tin an toàn và riêng tư để bộc
                        lộ bản thân theo cách bạn muốn, với người bạn muốn.
                    </p>
                </div>
                <div className='mt-4 flex justify-around'>
                    {cardIn4.map((item) => (
                        <>
                            <div class="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow flex justify-center ml-10 mb-10">

                                <div class="flex flex-col items-center text-center p-5 w-3/4">

                                    <h5 class="mb-1 text-4xl font-medium text-gray-900 ">{item.tilte}</h5>
                                    <span class="text-xl font-light text-gray-950 mt-4">{item.content}</span>
                                </div>
                            </div>
                        </>
                    ))}



                </div>
            </div>

        </>
    )
}

export default PrivatePage;