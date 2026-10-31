import Link from 'next/link'
import React from 'react'

function NavLink({href, label, className}: {href: string, label: string, className?: string}) {
  return (
    <Link
      href={href}
      className={`relative inline-block font-sans after:absolute after:-bottom-0.5 hover:scale-120 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:font-bold hover:after:scale-x-100 ${className ?? ''}`}
    >
      {label}
    </Link>
  )
}

export default NavLink