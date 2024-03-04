import React from "react";

const Article = ({ data }) => {
  return (
    <div className="flex p-[40px] gap-[20px] border-[2px] border-[#161513] mb-[40px]">

      <div className="font-[700] basis-[calc(50%-40px)]">
        <p className="text-[#EA4334] leading-[30px]">
          {data.type} / {data.date}
        </p>
        <p className=" text-[1.5rem] text-[#161513]">{data.title}</p>
      </div>
      <div className="text-gray-700 basis-[calc(50%-40px)] self-center">
        {data.content}
      </div>

    </div>
  );
};

export default Article;
