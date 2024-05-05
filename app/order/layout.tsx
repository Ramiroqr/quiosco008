import OrderNavbar from "@/components/order/OrderNavbar";
import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <div className="">
                    
                    <OrderNavbar />

                <div className="sm:flex">
                    <OrderSidebar />

                    <main className="sm:flex-1 sm:h-screen sm:overflow-y-scroll p-5">
                        {children}
                    </main>

                    <OrderSummary />
                </div>
            </div>
        </>
    )
}