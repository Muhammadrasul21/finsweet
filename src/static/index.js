import logo from "../assets/Logo1.png"
import logotwo from "../assets/Logo2.png"
import logothree from "../assets/Logo3.png"
import logofour from "../assets/Logo4.png"
import logofive from "../assets/Logo5.png"
import { PiBuildingApartmentLight, PiPlantLight, PiPlant} from "react-icons/pi";
import { LuWaves } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";
import { GiSittingDog } from "react-icons/gi";


export const navItems = [
    {
      id:1,
      title:"Home",
      path:"/"
    },
    {
      id:2,
      title:"About us",
      path:"/about"
    }, 
    {
      id:3,
      title:"What We Do",
      path:"/whatWeDo"
    }, 
    {
      id:4,
      title: "Media",
      path:"/media"
    },
    {
      id:5,
      title:"Contact",
      path:"/contact"
    }
]
export const logos = [logo, logotwo, logothree, logofour, logofive, logotwo]
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
export const footerItems = ["About us", "Team", "What we do", "Contact"]
export const footerUL = ["Projects", "Events", "Donate", "Blog"]
export const footerLi = ["Facebook", "Instagram", "Twitter", "Linkdin "]