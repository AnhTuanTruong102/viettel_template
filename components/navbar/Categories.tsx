"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Bãi biển",
    icon: TbBeach,
    description: "Chỗ nghỉ này gần bãi biển!",
  },
  {
    label: "Cối xay gió",
    icon: GiWindmill,
    description: "Chỗ nghỉ này có cối xay gió!",
  },
  {
    label: "Hiện đại",
    icon: MdOutlineVilla,
    description: "Chỗ nghỉ này có thiết kế hiện đại!",
  },
  {
    label: "Nông thôn",
    icon: TbMountain,
    description: "Chỗ nghỉ này nằm ở vùng quê!",
  },
  {
    label: "Hồ bơi",
    icon: TbPool,
    description: "Chỗ nghỉ này có hồ bơi tuyệt đẹp!",
  },
  {
    label: "Đảo",
    icon: GiIsland,
    description: "Chỗ nghỉ này nằm trên một hòn đảo!",
  },
  {
    label: "Hồ nước",
    icon: GiBoatFishing,
    description: "Chỗ nghỉ này gần một hồ nước!",
  },
  {
    label: "Trượt tuyết",
    icon: FaSkiing,
    description: "Chỗ nghỉ này có hoạt động trượt tuyết!",
  },
  {
    label: "Lâu đài",
    icon: GiCastle,
    description: "Chỗ nghỉ này là một lâu đài cổ kính!",
  },
  {
    label: "Hang động",
    icon: GiCaveEntrance,
    description: "Chỗ nghỉ này nằm trong một hang động huyền bí!",
  },
  {
    label: "Cắm trại",
    icon: GiForestCamp,
    description: "Chỗ nghỉ này có hoạt động cắm trại!",
  },
  {
    label: "Bắc cực",
    icon: BsSnow,
    description: "Chỗ nghỉ này nằm ở vùng Bắc Cực!",
  },
  {
    label: "Sa mạc",
    icon: GiCactus,
    description: "Chỗ nghỉ này nằm trong sa mạc!",
  },
  {
    label: "Trang trại",
    icon: GiBarn,
    description: "Chỗ nghỉ này nằm trong một trang trại!",
  },
  {
    label: "Sang trọng",
    icon: IoDiamond,
    description: "Chỗ nghỉ này mới và cực kỳ sang trọng!",
  },
];

type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            label={items.label}
            selected={category === items.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
