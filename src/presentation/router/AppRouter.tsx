import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import { HomePage } from "../pages/home";
import { CategoryPage } from "../pages/category";
import { FeaturedPage } from "../pages/featured";
import { ColectivoPage, ViewPlazaDeReyes } from "../pages/colectivos";
import { AboutUs } from "../pages/aboutUs";
import EventInfo from "../components/ui/EventInfo";
import PasswordSecurity from "../pages/admin/Passwordsecurity/PasswordSecurity";
import Register from "../pages/admin/Register/Register";
import { Entries } from "../pages/admin/Entries";
import { SavedEvents } from "../pages/admin/SavedEvents";
import { PaymentMethod } from "../pages/admin/Payment";
import { Question } from "../pages/question_index";
import BlogLayout from "../components/shared/blog/BlogLayout";
import { Artists, Page, Profile } from "../pages/admin/home";
import { ViewBatalla } from "../pages/category/ViewBatalla";
import { ViewFresstyle } from "../pages/category/ViewFresstyle";
import BeatboxPage from "../pages/category/BeatboxPage";
import BreakdancePage from "../pages/category/BreakdancePage";
import Login from "../pages/auth/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/beat-box",
        element: <BeatboxPage />,
      },
      {
        path: "/break-dance",
        element: <BreakdancePage />,
      },

      {
        path: "/category/rap/batallas",
        element: <ViewBatalla />,
      },
      {
        path: "/category/rap/freestyle",
        element: <ViewFresstyle />,
      },
      {
        path: "/featured",
        element: <FeaturedPage />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/colectivos",
        element: <ColectivoPage />,
      },
      {
        path: "/colectivos/rap/plaza-de-reyes",
        element: <ViewPlazaDeReyes />,
      },
      {
        path: "/my-profile",
        element: <Profile />,
      },
      {
        path: "/my-artists",
        element: <Artists />,
      },
      {
        path: "/my-page",
        element: <Page />,
      },
      {
        path: "/password-security",
        element: <PasswordSecurity />,
      },
      {
        path: "/saved-events",
        element: <SavedEvents />,
      },
      {
        path: "/entries",
        element: <Entries />,
      },
      {
        path: "/payment-method",
        element: <PaymentMethod />,
      },
      {
        path: "/questions",
        element: <Question />,
      },
      
    ],
  },
  {
    path: "/freestyle",
    element: <div>freestyle</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/event",
    element: <EventInfo />,
  },
  {
    path: "/blog",
    element: <BlogLayout />,
  },
  {
    path: "/register",
    element: <Register />,

  },
]);