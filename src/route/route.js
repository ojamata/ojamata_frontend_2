import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../view/pages/landing_page/LandingPage";
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
           
        ]
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