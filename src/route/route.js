import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../view/pages/landing_page/LandingPage";

export const ROUTES = [
    {
        path: '',
        element: <LandingPageLayout/>,
        children: [
            {
                path: '',
                element: <LandingPage/>, 
            }
        ]
    }
]