"use client";

import { motion } from "framer-motion";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { FaFireExtinguisher } from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineBathtub, MdOutlineCoffeeMaker } from "react-icons/md";
import { RiSafeLine } from "react-icons/ri";

const offersRowOne = [
  {
    label: "Nhìn ra vườn",
    icon: GiButterflyFlower,
  },
  {
    label: "Nước nóng",
    icon: BsFire,
  },

  {
    label: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Cà phê",
    icon: MdOutlineCoffeeMaker,
  },
  {
    label: "Camera an ninh",
    icon: BiCctv,
  },
];

const offersRowTwo = [
  {
    label: "Bồn tắm",
    icon: MdOutlineBathtub,
  },
  {
    label: "Không gian làm việc riêng",
    icon: GrWorkshop,
  },
  {
    label: "Két sắt",
    icon: RiSafeLine,
  },
  {
    label: "Bãi đậu xe miễn phí",
    icon: AiOutlineCar,
  },
  {
    label: "Bình chữa cháy",
    icon: FaFireExtinguisher,
  },
];

type Props = {};

function Offers({}: Props) {
  return (
    <div>
      <p className="text-xl font-semibold">Những tiện ích tại đây</p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-2">
          {offersRowOne.map((item, index) => (
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
        {/* another row */}
        <div className="flex flex-col gap-2">
          {offersRowTwo.map((item, index) => (
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
