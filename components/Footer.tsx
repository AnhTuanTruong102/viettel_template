"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";
import FooterColumn from "@/components/FooterColumn";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState("Hoa Kỳ");

  const itemData = [
    ["VỀ CHÚNG TÔI", "Phòng tin tức", "Tìm hiểu về các tính năng mới", "Thư từ nhà sáng lập", "Cơ hội nghề nghiệp", "Nhà đầu tư"],
    ["Hỗ trợ", "Trung tâm trợ giúp", "AirCover", "Tùy chọn hủy đặt chỗ", "Thông tin an toàn", "Báo cáo vấn đề trong khu vực"],
    ["Cộng đồng", "Phòng tin tức", "Tìm hiểu về các tính năng mới", "Thư từ nhà sáng lập", "Cơ hội nghề nghiệp", "Nhà đầu tư"],
    ["Lưu trú", "Thử làm chủ nhà", "AirCover cho Chủ nhà", "Khám phá tài nguyên lưu trú", "Thông tin an toàn", "Cách lưu trú có trách nhiệm"],
  ];

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOOKUP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  const footerColumns = itemData.map((item, index) => (
    <FooterColumn index={index} data={item} />
  ));

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        {footerColumns}
        <p className="text-sm">{country}</p>
      </div>
    </ClientOnly>
  );
}

export default Footer;
