import React, {useState, createContext} from "react";
import {AppBar} from "../AppBar/AppBar";
import {Plans} from "../Plans/Plans";
import {PaymentCard} from "../PaymentCard/PaymentCard";

import "./paymentstyle.css";

export const ThemeContext = createContext(null);

export const PaymentPlanScreen = () => {

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const planData = [
    {
    id:1,
      title: "Basic",
      plans:[
        {
          name: "HD Quality",
          plan: true
        },
        {
          name: "40 Hz Sound",
          plan: true
        },
        {
          name: "2 Device",
          plan: false
        },
        {
          name: "Offline Download",
          plan: true
        },
        {
          name: "Dolby Atoms",
          plan: false
        },
        {
          name: "4K Picture",
          plan: false
        }
      ],
      price: '$20',
      type: 'month'
    },
    {
    id:2,
      title: "Family",
      plans:[
        {
          name: "HD Quality",
          plan: true
        },
        {
          name: "40 Hz Sound",
          plan: true
        },
        {
          name: "2 Device",
          plan: true
        },
        {
          name: "Offline Download",
          plan: true
        },
        {
          name: "Dolby Atoms",
          plan: false
        },
        {
          name: "4K Picture",
          plan: false
        }
      ],
      price: '$30',
      type: 'month'
    },
    {
    id:3,
      title: "Premium",
      plans:[
        {
          name: "HD Quality",
          plan: true
        },
        {
          name: "40 Hz Sound",
          plan: true
        },
        {
          name: "2 Device",
          plan: true
        },
        {
          name: "Offline Download",
          plan: true
        },
        {
          name: "Dolby Atoms",
          plan: true
        },
        {
          name: "4K Picture",
          plan: true
        }
      ],
      price: '$40',
      type: 'month'
    }
  ];

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <section
        className="payment-plan-screen-section tv-payment-plan"
        alt="img"
        id={theme}
      >
        <AppBar backgroundColor={"#000000"} appBarType={`appbarV4`} className="appbar-section" />
        <div className="payment-plan-screen-content">
         <Plans data={planData} title="Choose a Plan" color="#fff" backgroundColor="rgba(21,30,38, 0.64)" borderColor="#707070"/>
         <div className="tablet-mobile">
          <h3>Choose a Plan</h3>
          {
            planData.length && planData?.map(item => <PaymentCard title={item.title} list={item?.plans} price={item.price} planType={item.type} buttonText="Select Plan" />)
          }
        
         </div>
        </div>
      </section>
    </ThemeContext.Provider>
  );
};

