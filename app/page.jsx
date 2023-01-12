"use client";

import { useState } from "react";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";
import HouseIcon from "@mui/icons-material/House";
import ParkIcon from "@mui/icons-material/Park";
import WebIcon from "@mui/icons-material/Web";
import IosShareIcon from "@mui/icons-material/IosShare";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import SimpleDialog from "../components/Dialog.js";

const baseStyles = {
  item: `
		bg-[#f5f4f4]
		mb-[16px]
		h-[56px]
		flex
		justify-between
		items-center
		rounded-[4px]
		hover:scale-[1.02]
		transform
		duration-[.15s]
		delay-[0s]
		ease-[cubic-bezier(0, .2, .5, 3)]
		ml-[12px]
		mr-[12px]
	`,
  icon: `
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
        src="https://avatars.githubusercontent.com/u/11678456?v=4"
        width={96}
        height={96}
        className="border rounded-full mb-[16px]"
      />

      <div className="flex items-center">
        <h1 className="font-bold text-[20px]">@FloSlv</h1>
        <VerifiedIcon fontSize="small" className="text-[#00b6ff]" />
      </div>

      <div className="mt-[32px] w-[100%] max-w-[680px]">
        <a href="https://flo-slv.dev" target="_blank" rel="noopener norefferer">
          <div className={`${baseStyles.item} group/item`}>
            <HouseIcon fontSize="large" className="ml-[10px]" />
            <div>My personal website</div>
            <div className="mr-[10px] invisible group-hover/item:visible group-hover/item:text-gray-500 group-hover/item:hover:text-black">
              <IosShareIcon onClick={(e) => handleClickOpen(e)} />
            </div>
          </div>
        </a>

        <a
          href="https://links.flo-slv.dev"
          target="_blank"
          rel="noopener norefferer"
        >
          <div className={`${baseStyles.item} group/item`}>
            <ParkIcon fontSize="large" className="ml-[10px]" />
            <div>Link-in-bio page</div>
            <div className="mr-[10px] invisible group-hover/item:visible group-hover/item:text-gray-500 group-hover/item:hover:text-black">
              <IosShareIcon onClick={(e) => handleClickOpen(e)} />
            </div>
          </div>
        </a>

        <a
          href="https://github.com/Flo-Slv/browser-homepage"
          target="_blank"
          rel="noopener norefferer"
        >
          <div className={`${baseStyles.item} group/item`}>
            <WebIcon fontSize="large" className="ml-[10px]" />
            <div>My personal website</div>
            <div className="mr-[10px] invisible group-hover/item:visible group-hover/item:text-gray-500 group-hover/item:hover:text-black">
              <IosShareIcon onClick={(e) => handleClickOpen(e)} />
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
          href="https://github.com/flo-slv"
          target="_blank"
          rel="noopener norefferer"
        >
          <GitHubIcon fontSize="large" className={baseStyles.icon} />
        </a>
        <a
          href="https://linkedin.com/in/flo-slv"
          target="_blank"
          rel="noopener norefferer"
        >
          <LinkedInIcon fontSize="large" className={baseStyles.icon} />
        </a>
        <a
          href="https://twitter.com/floslv1"
          target="_blank"
          rel="noopener norefferer"
        >
          <TwitterIcon fontSize="large" className={baseStyles.icon} />
        </a>
      </div>
    </main>
  );
};

export default Home;
