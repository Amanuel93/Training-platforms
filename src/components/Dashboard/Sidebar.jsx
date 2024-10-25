

// export default Sidebar
// import React, { useState } from 'react';
// import { FaAngleLeft } from 'react-icons/fa6';
// import { MdDashboardCustomize, MdCarRental } from 'react-icons/md';
// import { IoAdd } from 'react-icons/io5';
// import { IoIosSettings } from "react-icons/io";
// import { FaStoreAlt } from 'react-icons/fa';
// import { IoDocumentsOutline } from "react-icons/io5";
// import { FaPeopleLine } from "react-icons/fa6";
// import { NavLink } from 'react-router-dom';
// import logo from '../../assets/ethiopost_logo.jfif';

// const Sidebar = () => {
//   const [open, setOpen] = useState(true);
//   const Menus = [
//     { title: 'Dashboard', icon: <MdDashboardCustomize className='text-3xl' />, link: '/Dashboard' },
//     { title: 'Trainees', icon: <FaPeopleLine className='text-3xl' />, link: '/Dashboard/trainee' },
//     { title: 'Add Training', icon: <IoAdd className='text-3xl' />, link: '/Dashboard/add' },
//     { title: 'Trainings', icon: <IoDocumentsOutline className='text-3xl' />, link: '/Dashboard/trainings' },
//     { title: 'Settings', icon: <IoIosSettings className='text-3xl' />, link: '/Dashboard/setting' },
//   ];

//   return (
//     <div
//       className={` ${open ? 'w-72' : 'w-20'} bg-yellow-50 h-screen py-5 pt-8 relative duration-300`}
//     >
//       <FaAngleLeft
//         className={`absolute cursor-pointer -right-3 top-9 h-7 w-7 border-dark-purple border-2 rounded-full bg-white font-thin ${!open && 'rotate-180'}`}
//         onClick={() => setOpen(!open)}
//       />
//       <div className="flex gap-x-4 items-center px-1">
//         <img src={logo} alt="Logo" className={`h-14 w-14 rounded-full ${!open && 'h-10 w-10'}`} />
//         <h1 className={`text-black origin-left font-bold text-2xl duration-200 ${!open && 'hidden'}`}>
//           POETS
//         </h1>
//       </div>
//       <ul className="pt-6">
//         {Menus.map((menu, index) => (
//           <NavLink
//             key={index}
//             to={menu.link}
//             className={({ isActive }) => 
//               `flex items-center p-2 cursor-pointer hover:bg-light-white text-black text-sm  gap-x-4 
//               ${menu.gap ? 'mt-9' : 'mt-2'} ${isActive ? 'bg-indigo-900 border-solid border-l-8 border-yellow-600 text-white' : ''}`
//             }
//           >
//             {menu.icon}
//             <span className={`${!open && 'hidden'} origin-left duration-200 text-lg`}>
//               {menu.title}
//             </span>
//           </NavLink>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { MdDashboardCustomize } from 'react-icons/md';
import { IoAdd, IoDocumentsOutline,IoArrowBackCircleSharp } from 'react-icons/io5';
import { IoIosSettings } from "react-icons/io";
import { FaPeopleLine } from 'react-icons/fa6';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../assets/ethiopost_logo.jfif';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', icon: <MdDashboardCustomize className='text-3xl' />, link: '/Dashboard' },
    { title: 'Trainees', icon: <FaPeopleLine className='text-3xl' />, link: '/Dashboard/trainee' },
    { title: 'Trainings', icon: <IoDocumentsOutline className='text-3xl' />, link: '/Dashboard/trainings' },
    { title: 'Add Training', icon: <IoAdd className='text-3xl' />, link: '/Dashboard/add' },
    { title: 'Settings', icon: <IoIosSettings className='text-3xl' />, link: '/Dashboard/setting' },
  ];

  return (
    <div className={` ${open ? 'w-72' : 'w-20'} bg-yellow-50 h-screen pt-2 pb-5 relative duration-300`}>
      <IoArrowBackCircleSharp
        className={`absolute cursor-pointer -right-3 top-16 h-7 w-7 border-dark-purple border-2 rounded-full bg-white font-thin ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center px-1">
        <img src={logo} alt="Logo" className={`h-14 w-14 rounded-full ${!open && 'h-10 w-10'}`} />
        <Link to = "/" className={`text-black origin-left font-bold text-2xl duration-200 !font-italic ${!open && 'hidden'}`}>
          POETS
        </Link>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.link}
            end={menu.link === '/Dashboard'}
            className={({ isActive }) => 
              `flex items-center p-2 cursor-pointer hover:bg-light-white text-black text-sm gap-x-4 
              ${menu.gap ? 'mt-9' : 'mt-2'} ${isActive ? 'bg-indigo-900 border-solid border-l-8 border-yellow-600 text-white' : ''}`
            }
          >
            {menu.icon}
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg`}>
              {menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

