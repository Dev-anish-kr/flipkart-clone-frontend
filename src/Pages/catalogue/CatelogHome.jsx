import React from 'react'
import CateType from './CateType'
import "./catelogStyle.css"

const CatelogHome = () => {
    const catelogItem=[
        {
            category_type:"Mobile & Tablets",
            cate_discription:"Mobile Phones Big Saving Days March 2023",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/redmi-n12.webp",
                    name:"Redmi Note 12 Pro 5G",
                    offer_Name:"From ₹22,499",
                    size:{
                        height:"150px",
                        width:"115px",
                    },
                    applicable_device:"67W Turbo Charge"
                },
                {
                    image:"assets/Catelog/mobile/bs-tab.webp",
                    name:"Best Selling Tablets",
                    offer_Name:"From ₹9,999",
                    size:{
                        height:"112px",
                        width:"175px",
                    },
                    applicable_device:"realme, Samsung & More"
                },
                {
                    image:"assets/Catelog/mobile/mobile-pxp5.webp",
                    name:"Poco X5 Pro 5G",
                    offer_Name:"From ₹22,999",
                    size:{
                        height:"150px",
                        width:"115px",
                    },
                    applicable_device:"SD 771G | 108 MP Tripal Cam"
                },
                {
                    image:"assets/Catelog/mobile/mobile-pxpr.webp",
                    name:"Poco X4 Pro 5G",
                    offer_Name:"From ₹14,999",
                    size:{
                        height:"150px",
                        width:"115px",
                    },
                    applicable_device:"67W Sonic Charge |AMOLED"
                },
                {
                    image:"assets/Catelog/mobile/realme-mobile.webp",
                    name:"realme 10Pro+ 5G",
                    offer_Name:"From ₹24,999",
                    size:{
                        height:"170px",
                        width:"170px",
                    },
                    applicable_device:"120Hz Curve Vision Display"
                },
                {
                    image:"assets/Catelog/mobile/tab.webp",
                    name:"Apple iPads",
                    offer_Name:"From ₹29,900",
                    size:{
                        height:"170px",
                        width:"125px",
                    },
                    applicable_device:"NCEMI | Cashbback Up to ₹4,000 "
                },
            ]
        },
        {
            category_type:"Best Battery Phones",
            cate_discription:"More Then 4000MAH",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"150px",
                        width:"100px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
            ]
        },
        {
            category_type:"Top Deal On Fashion",
            cate_discription:"MIN 50% Off",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
            ]
        },
        {
            category_type:"Featured Brand",
            cate_discription:"Foodgrains, Oil & Ghee",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
            ]
        },
        {
            category_type:"Household Care & Offer Zone",
            cate_discription:"Cleaning Essencial & Pooja Needs",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
            ]
        },
        {
            category_type:"Super Saver Days",
            cate_discription:"Toys & Stationary",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
                {
                    image:"assets/Catelog/mobile/",
                    name:"",
                    offer_Name:"",
                    size:{
                        height:"200px",
                        width:"200px",
                    },
                    applicable_device:""
                },
            ]
        },
    ]
  return (
    <div className='catelog-home'>
    <h4>Today's Special</h4>
    {
        catelogItem?.map((catelog,idx)=>{
           return <CateType key={idx} catelog={catelog}/>
        })
    }
    </div>
  )
}

export default CatelogHome