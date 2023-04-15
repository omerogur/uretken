import React from 'react'
import CategoryItem from "./CategoryItem";
const Categories = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "SHIRT STYLE!",
            category:"men's clothing",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "LOUNGEWEAR ",
            category:"men's clothing",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "LIGHT JACKETS",
            category:"men's clothing",
        },
        {
            id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpsg-ZasY1s7QeLobHDUAH4O5CNK-y_fPWg&usqp=CAU",
            title: " KIDS",
            category:"electronics",
        },
        {
            id: 5,
            img: "https://janatachitralaya.in/wp-content/uploads/2016/05/banner-02.jpg",
            title: "MANS",
            category:"jewelery",
        },
        {
            id: 5,
            img: "https://ktnimg2.mncdn.com/cms/2022/08/08/28b669cf-b889-4cd9-859e-2c28c09907a4.jpg",
            title: "WOMENS!",
            category:"women's clothing",
        },
        {
            id: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxHrDzoDCb1ymhTIBXv2AaBGtB_vvekN2Kg&usqp=CAU",
            title: "HOME",
            category:"men's clothing",
        },
    ];

    return (
        <>
        <div className="d-flex flex-column flex-lg-row  justify-content-center align-items-center gap-3">
            {
                data.map((item, key) => (
                    <CategoryItem key={key} data={item}  />
                    ))
                }
           
        </div>
        <hr className='mt-4'/>
                </>
    )
}

export default Categories
