import React, { useEffect, useState } from 'react'
import './Result.css'
import Footer from './Footer'
import axios from 'axios';
import Product from './Product';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function Result() {
  const location = useLocation()
  console.log(location)
  const querry=location.state.data.search
   const[List,setList]=useState([]);
   const[newlist,setnewlist]=useState([]);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/q=${querry}`)
    .then(res => {
        console.log(res.data)
        setList(res.data)
    })
  //   function removeDuplicates(arr) {
  //     return [...new Set(arr)];
  // }
  // removeDuplicates(List)
  },[])  
  console.log(querry)
    
  return (
    <div className='result'>
     {List.map(listitem=>(
       <Product info={listitem.name} prize={listitem.price} image={listitem.image} />
       )
  )}

      {/* <Product info="Lenovo Legion 5 Ryzen 7 Octa Core 5800H - (16 GB/1 TB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 3060) 15ACH6H Gaming Laptop  (15.6 inch, Phantom Blue, Shadow Black, 2.4 kg, With MS Office)" prize="100000" image="https://rukminim1.flixcart.com/image/416/416/kt39jm80/computer/f/0/s/na-gaming-laptop-lenovo-original-imag6ggmwjmgqhqn.jpeg?q=70" />
      <Product info="Lenovo IdeaPad 3 Core i3 10th Gen - (8 GB/256 GB SSD/Windows 11 Home) 15IML05 Thin and Light Laptop  (15.6 Inch, Platinum Grey, 1.7 kg, With MS Office)" prize="100000" image="https://rukminim1.flixcart.com/image/416/416/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70" />
      <Product info="ASUS VivoBook 15 (2022) Core i3 10th Gen - (4 GB/512 GB SSD/Windows 11 Home) X515JA-EJ372WS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office)" prize="100000" image="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" />
      <Product info="HP Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15s-fq2629TU Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 KG, With MS Office)" prize="100000" image="https://rukminim1.flixcart.com/image/416/416/l2jcccw0/computer/s/k/0/-original-imagdus5mrsgjepa.jpeg?q=70" />
      <Product info="ASUS ROG Strix G15 Ryzen 7 Octa Core 4800H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX RTX 3050/144 Hz) G513IC-HN025W Gaming Laptop  (15.6 Inch, Eclipse Gray, 2.10 Kg)" prize="100000" image="https://rukminim1.flixcart.com/image/416/416/ko382a80/computer/s/3/g/na-gaming-laptop-asus-original-imag2mrvjhrrj3hz.jpeg?q=70" /> */}
      {/* <Footer /> */}
      
    </div>
  )
}

export default Result