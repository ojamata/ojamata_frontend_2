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
import PickerVerification from "../view/pages/pickers_verification/PickerVerification";
import PickerPaymentInfo from "../view/pages/picker_payment_info/PickerPaymentInfo";
import Response from "../view/components/Response";
import LandingPageWithAddToCart from "../view/pages/landing_page/LandingPageWithAddToCart";
import PromptRegister from "../view/pages/Prompts/PromptRegister";
import PromptLogin from "../view/pages/Prompts/PromptLogin";
import SignUp from "../view/pages/SignUp/SignUp";
import Login from "../view/pages/Login/Login";


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
                element: <LandingPageWithAddToCart/>, 
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
    },
    {
        path: '/picker/profile',
        element: <UserProfile/>
    },
    {
        path: '/picker/verification',
        element: <PickerVerification/>
    },
    {
        path: '/picker/addPaymentInfo',
        element: <PickerPaymentInfo/>
    },
    {
        path: '/paymentInfo/success',
        element: <Response text='Payment Successful'/>
    },
    {
        path: '/login',
        element: <PromptLogin/>, 
    },
    {
        path: '/login/picker',
        element: <Login/>, 
    },
    {
        path: '/login/customer',
        element: <Login/>, 
    },
    {
        path: '/signup',
        element: <PromptRegister/>, 
    },
    {
        path: '/signup/picker',
        element: <SignUp/>, 
    },
    {
        path: '/signup/customer',
        element: <SignUp/>, 
    },

]