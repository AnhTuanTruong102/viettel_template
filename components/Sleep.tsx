"use client";

import { motion } from "framer-motion";
import { BiBed } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";

type Props = {};

function Sleep({}: Props) {
  return (
    <div>
      <p className="text-xl font-semibold">{`Nơi bạn sẽ ngủ`}</p>
      <div className="flex justify-between pt-6">
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-black rounded-md cursor-pointer"
        >
          <div className="flex flex-col justify-start items-start px-6 py-6 gap-1 text-center">
            <IoBedOutline size={25} />
            <p className="text-lg text-black font-medium">Phòng ngủ 1</p>
            <p className="text-sm text-neutral-500">1 giường king</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-black rounded-md cursor-pointer"
        >
          <div className="flex flex-col justify-start items-start px-6 py-6 gap-1 text-center">
            <IoBedOutline size={25} />
            <p className="text-lg text-black font-medium">Phòng ngủ 2</p>
            <p className="text-sm text-neutral-500">1 giường queen</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-black rounded-md cursor-pointer"
        >
          <div className="flex flex-col justify-start items-start px-6 py-6 gap-1 text-center">
            <div className="flex justify-between gap-2">
              <IoBedOutline size={25} />
              <BiBed size={25} />
            </div>
            <p className="text-lg text-black font-medium">Phòng ngủ 3</p>
            <p className="text-sm text-neutral-500">
              1 giường queen, 1 giường đơn
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sleep;
