import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {  Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import DashBoard from './pages/DashBoard';
import AllUser from './pages/AllUser';
import ActivityNotification from './pages/ActivityNotification';
import StoreList from './pages/StoreList';
import CampaignList from './pages/CampaignList';
import WithdrawalList from './pages/WithdrawalList';
import PaymentHistory from './pages/PaymentHistory';
import OrderList from './pages/OrderList';
import TotalSales from './pages/TotalSelas';
import Setting from './pages/Setting';
import SubAdminList from './pages/SubAdminList';
import AddSubAdmin from './pages/AddSubAdmin';
import AddNotification from './pages/AddNotification';
import DonorList from './pages/DonorList';
import DonationList from './pages/DonationList';
import Role from './pages/Role';
import EnquryList from './pages/EnquryList';
import AdminLogin from "./pages/AdminLogin";
import Addcategory from "./mainpages/category/create";
import Categorylist from "./mainpages/category/list";
import Productlist from "./mainpages/products/list";
import Addproduct from "./mainpages/products/create";

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            {/* <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent> */}
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<AdminLogin />)} />
                {/* <Route path="/ecommerce" element={(<Ecommerce />)} /> */}
                <Route path="/Dashboard" element={(<DashBoard />)} />

                {/* pages  */}
                <Route path="/alluser" element={<AllUser />} />
                <Route path="/Category-list" element={<Categorylist />} />
                <Route path="/Addcategory" element={<Addcategory />} />
                <Route path="/Product-list" element={<Productlist />} />
                <Route path="/createproduct" element={<Addproduct />} />

                <Route path="/Enquiry-List" element={<EnquryList />} />
                <Route path="/Donor-List" element={<DonorList />} />
                <Route path="/Donation-List" element={<DonationList/>} />
                <Route path="/ActiveNotification" element={<ActivityNotification />} />
                <Route path="/Store-List" element={<StoreList />} />
                <Route path="/Campaign-List" element={<CampaignList />} />
                <Route path="/Withdrawal-List" element={<WithdrawalList />} />
                <Route path="/Payment-History" element={<PaymentHistory />} />
                <Route path="/OrderList" element={<OrderList/>} />
                <Route path="/Total-Sales" element={<TotalSales/>} />
                <Route path="/Add-sub-Admin" element={<AddSubAdmin/>} />
                <Route path="/Sub-Admin-List" element={<SubAdminList/>} />
                <Route path="/Add-Notification" element={<AddNotification/>} />
                <Route path="/Role" element={<Role/>} />
                <Route path="/Setting" element={<Setting/>} />
                {/* <Route path="/orders" element={<Orders />} /> */}
                {/* <Route path="/employees" element={<Employees />} /> */}
                {/* <Route path="/customers" element={<Customers />} /> */}

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/Report" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
