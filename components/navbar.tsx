import Link from "next/link";
import MainNav from "./main-nav";
//import Container from "./ui/container";
//import MainNav from "./main-nav";
//import getCategories from "@/actions/get-categories";
//import NavbarActions from "./navbar-action";
//prevents caching or always refreshing. so that if any changes happens in Admin page the result is updated immidiately
export const revalidate=0
const Navbar =async () => {
    //const categories=await getCategories()
    return ( 
        <div className="border-b fixed top-0 left-0  right-0 bg-gradient-to-tr from-green-500 to-red-950 w-full">
            {/*<Container>Navbar</Container>*/}
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">ADMIN PANEL</p>
                </Link>
                <MainNav />
                {/*
                <NavbarActions/>*/}
            </div>
            
        </div>
     );
}
 
export default Navbar;