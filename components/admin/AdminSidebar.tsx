import Logo from "../ui/Logo"
import AdminRoute from "./AdminRoute"

const adminNavigation = [
    {url: '/admin/orders', text: 'Ordenes', blank: false, img: '/carrito.svg'},
    {url: '/admin/products', text: 'Productos', blank: false, img: '/bag.svg'},
    {url: '/order/cafe', text: 'Ver Quiosco', blank: true, img: '/lunch.svg'},
]

export default function AdminSidebar() {

    return (
        <>
            <Logo />
            <div className="space-y-3 ">
                <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {adminNavigation.map(link => (
                        <AdminRoute 
                            key={link.url}
                            link={ link}
                        />
                    ))}
                </nav>
            </div>
        </>

    )
}