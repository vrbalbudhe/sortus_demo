import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { PublicLayout } from "./layouts/PublicLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Individual Role Components
import IndividualDashboard from "./components/Individual/Individual_Dashboard";
import OrderHistory_Individual from "./components/Individual/OrderhistoryIndividual";
import ProfilePage_Individual from "./components/Individual/ProfilePage_Individual";
import PriceList_Individual from "./components/Individual/Pricelist_Individual";
import OrderTrackingPage_Individual from "./components/Individual/OrderTrackingPage_Individual";

// Business Role Components
import BusinessDashboard from "./components/Business/Business_Dashboard";
import OrderHistory_Business from "./components/Business/OrderHistory_Business";
import Pricelist_Business from "./components/Business/Pricelist_Business";
import ProfilePage_Business from "./components/Business/ProfilePage_Business";
import OrderTrackingPage_Business from "./components/Business/OrderTrackingPage_Business";

// Admin Role Components
import AdminDashboard from "./components/Admin/Admin_Dashboard";
import ProfilePageAdmin from "./components/Admin/ProfilePage_Admin";

// Logistic Role Components
import LogisticDashboard from "./components/Logistic/Logistic_Dashboard";
import MyPickups_Logistic from "./components/Logistic/MyPickupPage";
import Performance_Logistic from "./components/Logistic/Logistic_Dashboard";
import ProfilePage_Logistic from "./components/Logistic/ProfilePage_Logistic";

// Common Pages
import CancelOrderPage from "./pages/Ecostore/CancelOrderPage";
import RescheduleOrderPage from "./pages/Ecostore/RescheduleOrderPage";
import CancelPickup from "./pages/Pickup/CancelPickup";
import ReschedulePickupPage from "./pages/Pickup/ReschedulePickupPage";
import LandingPage from "./pages/LandingPage";
import PriceListPage from "./pages/PriceListPage";
import EcostoreProduct from "./pages/Ecostore/EcostoreProduct";
import CheckoutPage from "./pages/Ecostore/CheckoutPage";
import PickupRequestForm from "./pages/Pickup/PickupRequestForm";
import ProductView from "./pages/Ecostore/ProductView";

const SubmitEWaste = () => (
  <div className="p-10">Submit E-waste Page (Individual) – Coming Soon</div>
);

const RedeemPoints = () => (
  <div className="p-10">Redeem Points Page (Individual) – Coming Soon</div>
);

const SubmitEWaste_Business = () => (
  <div className="p-10">Submit E-waste Page (Business) – Coming Soon</div>
);

const RedeemPoints_Business = () => (
  <div className="p-10">Redeem Points Page (Business) – Coming Soon</div>
);

function App() {
  const router = createBrowserRouter([
    // ✅ Public routes
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "pricelist", element: <PriceListPage /> },
        { path: "eco-store", element: <EcostoreProduct /> },
        { path: "product/view/:id", element: <ProductView /> },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "pickup", element: <PickupRequestForm /> },
        { path: "faq-more", element: <LandingPage /> },
      ],
    },
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },

    // ✅ Protected routes
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        // Individual
        { path: "individual-dashboard", element: <IndividualDashboard /> },
        { path: "individual-order-history", element: <OrderHistory_Individual /> },
        { path: "individual-profile", element: <ProfilePage_Individual /> },
        { path: "individual-pricelist", element: <PriceList_Individual /> },
        { path: "submit-e-waste", element: <SubmitEWaste /> },
        { path: "redeem-points", element: <RedeemPoints /> },
        { path: "individual/track/:id", element: <OrderTrackingPage_Individual /> },

        // Business
        { path: "business-dashboard", element: <BusinessDashboard /> },
        { path: "business-order-history", element: <OrderHistory_Business /> },
        { path: "business-pricelist", element: <Pricelist_Business /> },
        { path: "business-profile", element: <ProfilePage_Business /> },
        { path: "business-submit-e-waste", element: <SubmitEWaste_Business /> },
        { path: "business-redeem-points", element: <RedeemPoints_Business /> },
        { path: "track/business/:orderId", element: <OrderTrackingPage_Business /> },

        // Admin
        { path: "admin-dashboard", element: <AdminDashboard /> },
        { path: "admin-profile", element: <ProfilePageAdmin /> },

        // Logistic
        { path: "logistic-dashboard", element: <LogisticDashboard /> },
        { path: "logistic-mypickups", element: <MyPickups_Logistic /> },
        { path: "logistic-performance", element: <Performance_Logistic /> },
        { path: "logistic-profile", element: <ProfilePage_Logistic /> },
      ],
    },

    // ✅ Standalone pages outside protected layout
    { path: "/cancel-order", element: <CancelOrderPage /> },
    { path: "/reschedule-order", element: <RescheduleOrderPage /> },
    { path: "/pickup/cancel", element: <CancelPickup /> },
    { path: "/pickup/reschedule", element: <ReschedulePickupPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
