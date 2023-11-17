import React from 'react'

const HomeSectionCard = () => {
  return (
    //card
    <div className=' cursor-pointer  flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3 border'>
    
    {/*image inside the card */}
    <div className='h-[13rem] w-[10rem] ' >
    <img className='object-cover object-top w-full h-full ' src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/a/d/ad_73951greensaree_3_.jpg" alt='' />
    </div>

    {/* other text containts */}
    <div className='p-4'>
        <h3 className='text-lg font-medium text-grey-900'>
            Brand
        </h3>
        <p className='mt-2 text-sm text-gray-500 '>
            title
        </p>
    </div>

    </div>
  )
}

export default HomeSectionCard