import { Outlet } from "react-router-dom"
import { Footer, Navigation } from "../../modules"

export const HomeLayout = () => {
    return (
        <>
        <Navigation/>
        <Outlet/>
        <Footer/>
        </>
    )
}