'use client';
import React from 'react'
import Image from 'next/image';
import Img111 from "../../public/img1.jpg"
function BlogPage() {
  return (
    <div>
        THis is a blog page BlogPage
        <Image src={Img111} alt='image' />
    </div>
  )
}

export default BlogPage