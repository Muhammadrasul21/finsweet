import logo from "../assets/Logo1.png";
import logotwo from "../assets/Logo2.png";
import logothree from "../assets/Logo3.png";
import logofour from "../assets/Logo4.png";
import logofive from "../assets/Logo5.png";
import {
  PiBuildingApartmentLight,
  PiPlantLight,
  PiPlant,
} from "react-icons/pi";
import { LuWaves } from "react-icons/lu";
import { FaDroplet, FaArrowRightLong } from "react-icons/fa6";
import { GiSittingDog } from "react-icons/gi";
import dog from "../assets/dog.png";
import girl from "../assets/girl.png";
import grandma from "../assets/grandma.png";
import forest from "../assets/forest.png";
import wind from "../assets/wind.png";
import water from "../assets/water.png";
import nature from "../assets/Thumbnail.png";
import tree from "../assets/tree.png";
import palm from "../assets/palm.png";
import field from "../assets/field.png";
import ngo from "../assets/ngo.svg";
import global from "@/assets/global.svg";
import earth from "@/assets/earth.svg";
import foresto from "@/assets/foresto.svg";
import leonard from "@/assets/leonard.png";
import francis from "@/assets/francis.png";
import kylia from "@/assets/kylia.png";
import adrian from "@/assets/adrian.png";
import freddy from "@/assets/freddy.png";
import dale from "@/assets/dale.png";
import miriam from "@/assets/miriam.png";
import ellen from "@/assets/ellen.png";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About us",
    path: "/about",
  },
  {
    id: 3,
    title: "What We Do",
    path: "/whatWeDo",
  },
  {
    id: 4,
    title: "Media",
    path: "/media",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];
export const logos = [logo, logotwo, logothree, logofour, logofive, logotwo];
export const environmentItems = [
  {
    id: 1,
    title: "Build healthy cities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: PiBuildingApartmentLight,
  },
  {
    id: 2,
    title: "Protect land and water",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: LuWaves,
  },
  {
    id: 3,
    title: "Tree plantation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: PiPlantLight,
  },
  {
    id: 4,
    title: "Water sustainability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: FaDroplet,
  },
  {
    id: 5,
    title: "Animal safety",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: GiSittingDog,
  },
  {
    id: 6,
    title: "Biodiversity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: PiPlant,
  },
];
export const footerItems = ["About us", "Team", "What we do", "Contact"];
export const footerUL = ["Projects", "Events", "Donate", "Blog"];
export const footerLi = ["Facebook", "Instagram", "Twitter", "Linkdin "];
export const mediaImages = [
  {
    id: 1,
    img: girl,
    title: "Don’t destroy greenery and don’t spoil scenery.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: 2,
    img: dog,
    title: "Why saving wildlife is extremely important",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: 3,
    img: grandma,
    title: "Caring for the present is caring for the future",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
];
export const mediaNews = [
  {
    id: 1,
    img: nature,
    title: "Don’t destroy greenery and don’t spoil scenery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: 2,
    img: forest,
    title: " Is climate change happening faster than expected?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: 3,
    img: wind,
    title: "Top 10 facts about wind farms you didn't know",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: 4,
    img: water,
    title: "Top 10 facts about wind farms you didn't know",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
];
export const careItems = [
  {
    id: 1,
    title: "Build healthy cities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: PiBuildingApartmentLight,
  },
  {
    id: 2,
    title: "Tree plantation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: PiPlantLight,
  },
  {
    id: 3,
    title: "Protect land and water",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: LuWaves,
  },

  {
    id: 4,
    title: "Animal safety",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: GiSittingDog,
  },
];
export const projectItems = [
  {
    id: 1,
    img: tree,
    title: "Mission 40K: Tree plantation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    btn: "See more",
  },
  {
    id: 2,
    img: palm,
    title: "Weekly cleanliness program in city",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    btn: "See more",
  },
  {
    id: 3,
    img: field,
    title: "Wildlife safety program 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    btn: "See more",
  },
];
export const colors = [
  {
    id: 1,
    title: "40% planting trees",
    color: "#BEF3C0",
  },
  {
    id: 2,
    title: "40% planting trees",
    color: "#AC94F1",
  },
  {
    id: 3,
    title: "40% planting trees",
    color: "#FFF0CA",
  },
  {
    id: 4,
    title: "40% planting trees",
    color: "#F9CF64",
  },
  {
    id: 5,
    title: "40% planting trees",
    color: "#F38FBF",
  },
];
export const eventItems = [
  {
    id: 1,
    num: 23,
    date: "SEP",
    name: "Next Events",
    title: "Say no to plastic usage and save the planet",
    icon: FaArrowRightLong,
  },
  {
    id: 2,
    num: 25,
    date: "SEP",
    name: "Next Events",
    title: "Weekly cleaning program",
    icon: FaArrowRightLong,
  },
];
export const awardItems = [
  {
    id: 1,
    num: 2021,
    title: "Best NGO Award",
    desc: "Berlin, Germany",
    img: ngo,
  },
  {
    id: 2,
    num: 2018,
    title: "Global Award",
    desc: "New York, USA",
    img: global,
  },
  {
    id: 3,
    num: 2014,
    title: "Foresto Award",
    desc: "New Delhi, India",
    img: foresto,
  },
  {
    id: 4,
    num: 2010,
    title: "Earth Saver Award",
    desc: "Vienna, Austria",
    img: earth,
  },
];
export const teamItems = [
  {
    id: 1,
    img: leonard,
    name: "Leonard John Davies",
    job: "Cofounder, CEO",
  },
  {
    id: 2,
    img: francis,
    name: "Francis Weber",
    job: "Vice Chairman",
  },
  {
    id: 3,
    img: kylia,
    name: "Kyla Obrien",
    job: "Head of Authority",
  },
  {
    id: 4,
    img: adrian,
    name: "Adrian Dixon",
    job: "Support Executive",
  },
  {
    id: 5,
    img: freddy,
    name: "Freddy Busby",
    job: "Project Manager",
  },
  {
    id: 6,
    img: dale,
    name: "Dale Banks",
    job: "Accountatnt, Finance",
  },
  {
    id: 7,
    img: miriam,
    name: "Miriam Middleton",
    job: "Cofounder, CEO",
  },
  {
    id: 8,
    img: ellen,
    name: "Ellen Walton",
    job: "Vice Chairman",
  },
];
