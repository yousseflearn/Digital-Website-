'use client';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { BiExitFullscreen } from 'react-icons/bi';
import { GoScreenFull } from 'react-icons/go';
import { useState } from 'react';

export default function Header({ handleClickAsideOpen }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };
  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>ADMIN</h1>
          <div
            className="headerHam flex flex-center"
            onClick={handleClickAsideOpen}
          >
            <RiBarChartHorizontalLine />
          </div>
        </div>
        <div className="rightNav flex gap-2">
          <div onClick={toggleFullScreen}>
            {isFullScreen ? <BiExitFullscreen /> : <GoScreenFull />}
          </div>
          <div className="notification">
            <img src="/img/notification.png" alt="notification" />
          </div>
          <div>
            <img src="/img/avatar.jpg" width={25} height={25} />
          </div>
        </div>
      </header>
    </>
  );
}
