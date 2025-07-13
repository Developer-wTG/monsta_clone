"use client"
import Image from 'next/image'
import React from 'react'
import dummy from "../../../public/logo.png"
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className=' hidden lg:block'>
                {/* row-1 */}
                <div className="border hidden lg:block">
                    <section className='max-w-[1440px] flex justify-between py-4 mx-auto right1'>
                        <span className=' fontsninja-font'>Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</span>
                        <span className=' fontsninja-font endside'>Login / Register</span>
                    </section>
                </div>
                {/* row-2 */}
                <div className="border-b-1 row-3">
                    <section className='max-w-[1440px] flex justify-between py-[26px] mx-auto '>
                        <figure className='w-[50%]  '>
                            <Image src={dummy} width={165} height={45} alt='logo' />
                        </figure>
                        <aside className='w-[50%]  flex items-center justify-end right relative '>
                            <input type="text" placeholder='Search product... ' className='w-[40%] border-[0.1vw] p-[10px] me-[3%] hidden lg:block' /><CiSearch className='absolute hidden lg:block top-2.5 right-52 w-[40px] h-[27px]' />
                            <figure className='w-[5%] border  me-[3%] heart '>
                                <FaHeart className='h-[43px] w-[30px] mx-auto  rounded' />
                                
                            </figure>
                            <div className="w-[15% ] me-[3%] flex items-center border-[0.1vw] py-[4.5px] main   ">
                                <div className=""><IoMdCart className=' w-[40px] h-[35px] p-[5.5px] border-r-[0.1px] cart ' /></div>
                                <p className='text-[18px] font-[Rubik Light] font-semibold pe-[5px]  '>Rs.000</p>

                            </div>

                        </aside>

                    </section>
                </div>
                {/* row-3 */}
                <section className='max-w-[1440px]   mx-auto   hidden lg:block '>
                    <div className="flex mx-auto py-4 menu ">
                        <ul className='flex mx-[10px] items-center parent mx-auto '>
                            <li className=' mx-[30px] font-[Rubik] cursor-pointer p-[10px] text-[20px] text-[#C09578] cu ' >Home</li >
                            <li className=' mx-[30px] font-[Rubik] cursor-pointer p-[10px] text-[20px]' >Living
                                <div className="megamenu">
                                    <ul className='w-[32%]  '>
                                        <h1 className='font-bold text-black py-4.5 ms-4'>TABLES</h1>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Side and End Tables</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Nest Of Tables</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Console Table</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Coffee Table Sets</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Coffee Tables</li>

                                    </ul>
                                    <ul className='w-[32%] '>
                                        <h1 className='font-bold py-4.5 text-black ms-4'> LIVING STORAGE</h1>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Prayer Units</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Display Unit</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Shoe Racks</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Chest Of Drawers</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Cabinets and Sideboard</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Bookshelves</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Tv Units</li>
                                    </ul>
                                    <ul className='w-[32%] '>
                                        <h1 className='font-bold  text-black py-4.5 ms-4'>MIRRIORS</h1>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Wooden Mirrors</li>
                                    </ul>
                                </div>

                            </li >
                            <li className=' mx-[30px] font-[Rubik] cursor-pointer p-[10px] text-[20px]' >Sofa
                                <div className="megamenu">
                                    <ul className='w-[32%]  '>
                                        <h1 className='font-bold text-black py-4.5 ms-4'> SOFA CUM BED</h1>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Wooden Sofa Cum Bed</li>
                                    </ul>
                                    <ul className='w-[32%]  '>
                                        <h1 className='font-bold text-black py-4.5 ms-4'>SOFA SETS</h1>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>L Shape Sofa</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>1 Seater Sofa</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>2 Seater Sofa</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>3 Seater Sofa</li>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Wooden Sofa Sets</li>
                                    </ul>
                                    <ul className='w-[32%]  '>
                                        <h1 className='font-bold text-black py-4.5 ms-4'>SIWING JULHA</h1>
                                        <li className='pb-1.5 ms-4 text-[#ccc]'>Wooden Jhula</li>

                                    </ul>
                                </div>
                            </li >
                            <li className=' mx-[30px] font-[Rubik] cursor-pointer p-[10px] text-[20px]'>Pages
                                <div className="megamenu1">
                                    <ul className=''>

                                        <li className='pb-1.5 py-2 text-[18.5px]  ms-4 text-[#ccc]'>About Us</li>
                                        <li className='pb-1.5 py-2 text-[18.5px] ms-4 text-[#ccc]'>Cart</li>
                                        <li className='pb-1.5 py-2 text-[18.5px] ms-4 text-[#ccc]'>Chechout</li>
                                        <li className='pb-1.5 py-2 text-[18.5px] ms-4 text-[#ccc]'>Frequently Questions</li>
                                    </ul>
                                </div>

                            </li >
                            <li className=' mx-[30px] font-[Rubik] cursor-pointer p-[10px] text-[20px]'>ContactUs</li>
                        </ul>
                    </div>

                </section>
                




            </header>
            <header >
                    <section className=' responsive border  justify-between py-[26px] mx-auto   block lg:hidden flex '>
                        <figure className='w-[30%]  border'>
                            <Image src={dummy} width={165} height={45} alt='logo' />
                        </figure>
                         <figure className='w-[15%] border   heart '>
                                <FaHeart className='h-[43px] w-[30px] mx-auto  rounded' />
                                
                            </figure>
                        <div className="w-[15%] flex items-center border-[0.1vw] py-[4.5px] main text-center   ">
                                <div className=""><IoMdCart className=' w-[40px] h-[35px] p-[5.5px] border-r-[0.1px] cart ' /></div>
                                <p className='text-[18px] font-[Rubik Light] font-semibold pe-[5px]  '>Rs.000</p>

                            </div>
                        
                        

                    </section>
                </header>
        </>
    )
}

export default Header

// export function SwipeableTemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }