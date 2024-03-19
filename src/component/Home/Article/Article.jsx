import React from "react";
import {motion} from "framer-motion";

const Article = ({ data }) => {
  return (
    <motion.div className=" article-con flex p-[20px] gap-[30px] border-[2px] border-[#161513] mb-[40px]">

      <div className="font-[700] ">
        <p className="text-[#EA4334] leading-[30px]">
          {data.type} / {data.date}
        </p>
        <p className=" text-[1.5rem] text-[#161513] ">{data.title}</p>
      </div>
      <div className="text-gray-700  self-center">
        {data.content}
      </div>

    </motion.div>
  );
};

export default Article;
