import CustomerPageLayout from "../layouts/CustomerPageLayout";
import LandingPageLayout from "../layouts/LandingPageLayout";
import About from "../view/pages/about_page/About";
import OrderPage from "../view/pages/order_page/OrderPage";
import LandingPage from "../view/pages/landing_page/LandingPage";
import ShoppingCart from "../view/pages/shopping_cart/ShoppingCart";
import PickerPageLayout from "../layouts/PickerPageLayout";
import PickersAssignedOrders from "../view/pages/picker_order_page/PickersAssignedOrders";
import OrderManagerLayout from "../layouts/OrderManagerLayout";
import AdminPageLayout from "../layouts/AdminPageLayout";
import UserProfile from "../view/pages/profile/UserProfile";
import CreateUser from "../view/pages/profile/CreateUser";
import ResetPassword from "../view/pages/reset_password/ResetPassword";
import Logout from "../view/pages/logout/Logout";
import PickerRequest from "../view/pages/pickerRequest/PickerRequest";

export const ROUTES = [
    {
        path: '',
        element: <LandingPageLayout/>,
        children: [
            {
                path: '',
                element: <LandingPage/>, 
            },
            {
                path: '/about',
                element: <About/>, 
            }
        ]
    },
    {
        path: '',
        element: <CustomerPageLayout/>,
        children: [
            {
                path: '/customer',
                element: <LandingPage/>, 
            },
            {
                path: '/customer/about',
                element: <About/>, 
            }
        ]
    },
    {
        path: '/order-manager',
        element: <OrderManagerLayout/>,
    },
    {
        path: '/admin',
        element: <AdminPageLayout/>,
        
    },
    {
        path: '/picker',
        element: <PickerPageLayout/>,
        
    },
    {
        path: '/shopping-cart',
        element: <ShoppingCart/>
    },
    {
        path: '/customer/orders',
        element: <OrderPage/>
    },
    {
        path: '/picker/new_order',
        element: <PickersAssignedOrders/>
    },
    {
        path: '/admin/profile',
        element: <UserProfile/>
    },
    {
        path: '/admin/create/orderManager',
        element: <CreateUser role='Order Manager'/>
    },
    {
        path: '/admin/create/admin',
        element: <CreateUser role='Admin'/>
    },
    {
        path: '/resetPassword',
        element: <ResetPassword/>
    },
    {
        path: '/logout',
        element: <Logout/>
    },
    {
        path: '/orderManager/profile',
        element: <UserProfile/>
    },
    {
        path: '/orderManager/picker/request',
        element: <PickerRequest/>
    }
    

]