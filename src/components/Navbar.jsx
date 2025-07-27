import { Link } from "react-router-dom"
export const Navbar = () =>{
    const links = [
    {
        href:'/founders',
        title:"Founders"
    },
   {
        href:'/guide',
        title:"Guide"
    },{
        href:'/pricing',
        title:"Pricing"
    },{
        href:'/login',
        title:"Login"
    },
]
 return(  
    <div className="flex justify-between items-center">
        <div>
            <img
                src = '/logo.svg'
                height={70}
                width = {70}
            />
        </div>
        <div>
            {links.map((link,index)=>{
                <Link to={link.href} key={index}>{link.title }</Link>
            })}
        </div>
    </div>
)}