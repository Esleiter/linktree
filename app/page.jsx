"use client";

import { useState } from "react";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

import SimpleDialog from "../components/Dialog.js";

const tab = '\u00A0'

const baseStyles = {
  item: `
		bg-[#161B22]
		mb-[16px]
		h-[56px]
    text-white
    border-solid
    border-2
    border-[#4B5563]
		flex
		justify-between
		items-center
		rounded-lg
		hover:scale-[1.02]
		transform
		duration-[.15s]
		delay-[0s]
		ease-[cubic-bezier(0, .2, .5, 3)]
		ml-[12px]
		mr-[12px]
	`,
  icon: `
    text-[#1D9CEB]
		hover:scale-[1.10]
	`,
};

const Home = () => {
  const [open, setOpen] = useState(Boolean(false));
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(Boolean(false));
    setSelectedValue(value);
  };

  return (
    <main className="flex flex-col items-center pt-[64px]">
      <Image
        src="https://avatars.githubusercontent.com/u/57963142?v=4"
        width={96}
        height={96}
        className="border rounded-full mb-[16px]"
      />

      <div className="flex items-center">
        <h1 className="font-bold text-[20px] text-white">@esleiter{tab}</h1>
        <VerifiedIcon fontSize="small" className="text-[#00b6ff]" />
      </div>

      <div className="mt-[32px] w-[100%] max-w-[680px]">
        <a href="https://esleiter.com" target="_blank" rel="noopener norefferer">
          <div className={`${baseStyles.item} group/item`}>
            {tab}
            <div>Sitio web 🌐</div>
            <div className="rounded-full p-1 mr-[10px] invisible group-hover/item:visible group-hover/item:text-gray-500 group-hover/item:hover:bg-[#0D1117]">
              <MoreHorizIcon onClick={(e) => handleClickOpen(e)} />
            </div>
          </div>
        </a>

        <a
          href="https://blog.esleiter.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <div className={`${baseStyles.item} group/item`}>
            {tab}
            <div>Blog 💻</div>
            <div className="mr-[10px] invisible group-hover/item:visible group-hover/item:text-gray-500 group-hover/item:hover:text-black">
              <MoreHorizIcon onClick={(e) => handleClickOpen(e)} />
            </div>
          </div>
        </a>
      </div>

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

      <div className="flex gap-2 mt-[24px]">
      <a
          href="https://www.linkedin.com/in/xesleiter/"
          target="_blank"
          rel="noopener norefferer"
        >
          <LinkedIn fontSize="large" className={baseStyles.icon} />
        </a>
        <a
          href="https://github.com/esleiter"
          target="_blank"
          rel="noopener norefferer"
        >
          <GitHubIcon fontSize="large" className={baseStyles.icon} />
        </a>
        <a
          href="https://instagram.com/xesleiter"
          target="_blank"
          rel="noopener norefferer"
        >
          <InstagramIcon fontSize="large" className={baseStyles.icon} />
        </a>
      </div>
    </main>
  );
};

export default Home;
