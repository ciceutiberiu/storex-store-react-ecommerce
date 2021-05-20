import React from "react";
import { SiTrustpilot } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiAutoRepair } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    title: "Trust and Safety",
    icon: <SiTrustpilot />,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eos corrupti eaque assumenda odio maiores, rerum vero officiis repellat eum.",
  },
  {
    id: 2,
    title: "Protection",
    icon: <AiOutlineFileProtect />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos a similique excepturi nostrum dolore ad ipsa pariatur veritatis eaque.",
  },
  {
    id: 3,
    title: "Service & Repair",
    icon: <GiAutoRepair />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo, enim doloribus sint incidunt iure suscipit? Deleniti ut voluptatem distinctio.",
  },
];

export const products_url = "https://fakestoreapi.com/products";

export const promotedProducts_url = "https://fakestoreapi.com/products?limit=3";

export const singleProduct_url = "https://fakestoreapi.com/products/";
