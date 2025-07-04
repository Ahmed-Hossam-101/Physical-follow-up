import React from 'react'
import logo from '../assets/images/logoTr.png'
const Header = () => {
  return (
    <div className='header'>
     <img src={logo} alt="" />
     <div className="menu">
        <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data--h-bstatus="0OBSERVED"
width={24}
>
    <g id="SVGRepo_bgCarrier" strokeWidth={0} data--h-bstatus="0OBSERVED" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      data--h-bstatus="0OBSERVED"
    />
    <g id="SVGRepo_iconCarrier" data--h-bstatus="0OBSERVED">
      <path
        opacity={0.4}
        d="M17.5401 8.81014C19.1748 8.81014 20.5001 7.4849 20.5001 5.85014C20.5001 4.21537 19.1748 2.89014 17.5401 2.89014C15.9053 2.89014 14.5801 4.21537 14.5801 5.85014C14.5801 7.4849 15.9053 8.81014 17.5401 8.81014Z"
        fill="#32f15e"
        data--h-bstatus="0OBSERVED"
      />
      <path
        d="M6.46 8.81014C8.09476 8.81014 9.42 7.4849 9.42 5.85014C9.42 4.21537 8.09476 2.89014 6.46 2.89014C4.82524 2.89014 3.5 4.21537 3.5 5.85014C3.5 7.4849 4.82524 8.81014 6.46 8.81014Z"
        fill="#32f15e"
        data--h-bstatus="0OBSERVED"
      />
      <path
        d="M17.5401 21.1099C19.1748 21.1099 20.5001 19.7847 20.5001 18.1499C20.5001 16.5152 19.1748 15.1899 17.5401 15.1899C15.9053 15.1899 14.5801 16.5152 14.5801 18.1499C14.5801 19.7847 15.9053 21.1099 17.5401 21.1099Z"
        fill="#32f15e"
        data--h-bstatus="0OBSERVED"
      />
      <path
        opacity={0.4}
        d="M6.46 21.1099C8.09476 21.1099 9.42 19.7847 9.42 18.1499C9.42 16.5152 8.09476 15.1899 6.46 15.1899C4.82524 15.1899 3.5 16.5152 3.5 18.1499C3.5 19.7847 4.82524 21.1099 6.46 21.1099Z"
        fill="#32f15e"
        data--h-bstatus="0OBSERVED"
      />
    </g>
  </svg>
     </div>
    </div>
  )
}

export default Header