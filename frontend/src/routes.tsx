import Chat from "./pages/chat/Chat";

// Components
import Layout from "./pages/layout/Layout";


const APP_ROUTES = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Chat/>
      }
    ],
  },

];

export default APP_ROUTES;