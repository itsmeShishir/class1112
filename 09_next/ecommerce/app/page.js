import React from 'react'
import Link from 'next/link'

function Homepage() {
  return (
    <div>
      <Link href='/' >Home</Link>
      <Link href='/blog' >Blog</Link>
      <Link href='/product' >Product</Link>
      </div>
  )
}

export default Homepage