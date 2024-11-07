import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import css file in index.js
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    return (
        <div className="header">
            <h1
                style={{
                    color: "orange",
                    fontSize: "48px",
                    textTransform: "uppercase",
                }}
            >
                Pizza
            </h1>
        </div>
    );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
    // return (
    //     <div>
    //         <img src="pizzas/spinaci.jpg" alt="Spinach Pizza" />
    //         <h3>Spinach Pizza</h3>
    //         <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    //         <p>10</p>
    //     </div>
    // );
    return (
        <div className="pizza">
            <div>
                <img src={photoName} alt={name} />
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <>
            <h2>Our Menu</h2>
            <div className="pizzas">
                {pizzaData.map((pizza, i) => (
                    <Pizza
                        key={"pizza_" + i}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                        photoName={pizza.photoName}
                        soldOut={pizza.soldOut}
                    />
                ))}
            </div>
        </>
    );
}

function App() {
    return (
        // "className" instead of "class"
        <div className="container">
            <Header />
            <Tagline />
            <Menu />
            <Order />
        </div>
    );
}

// function Footer() {
//     let currenttime = new Date().getHours();
//     // let currenttime = 23;

//     // if (currenttime >= 10 && currenttime <= 22) {
//     //     footermsg = "We're currently open.";
//     // } else {
//     //     footermsg = "Sorry we're closed.";
//     // }

//     let footermsg =
//         currenttime >= 10 && currenttime <= 22
//             ? "We're currently open."
//             : "Sorry we're closed.";

//     return <footer className="footer">{footermsg}</footer>;
// }

let currentHour = new Date().getHours();

function Tagline() {
    if (currentHour >= 10 && currentHour <= 22) {
        return <h3>Authentic Italian Cuisine</h3>;
    }
}

function Order() {
    let msg = "";
    let button = <button class="btn">Order</button>;
    if (currentHour >= 10 && currentHour <= 22) {
        msg = <footer>We're currently open.</footer>;
        return [msg, button];
    } else {
        msg = <footer>Sorry, we're closed.</footer>;
        return msg;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
