'use client';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { BsPostcard } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';
import { GrGallery } from 'react-icons/gr';
import { RiContactsBook3Line } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';

export default function Aside({ handleAsideOpen, handleClickAsideOpen }) {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (link) => {
    setActiveLink((prevActive) => (prevActive === link ? null : link));
    setClicked(false);
  };

  useEffect(() => {
    // update active link state when the page is reloaded
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <aside className={handleAsideOpen ? 'asideLeft active' : 'asideLeft'}>
        <ul>
          <Link href="/">
            <li className="navActive">
              <IoHome />
              <span>Dashboard</span>
            </li>
          </Link>
          <li
            className={
              activeLink === '/blogs'
                ? 'navActive flex-col flex-left'
                : 'flex-col flex-left'
            }
            onClick={() => handleLinkClick('/blogs')}
          >
            <div className="flex gap-1">
              <BsPostcard />
              <span>Blogs</span>
            </div>
            {activeLink === '/blogs' && (
              <ul>
                <Link href="/blogs">
                  <li>All Blogs</li>
                </Link>
                <Link href="/blogs/draftBlogs">
                  <li>Draft Blogs</li>
                </Link>
                <Link href="/blogs/addBlog">
                  <li>Add Blog</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === '/projects'
                ? 'navActive flex-col flex-left'
                : 'flex-col flex-left'
            }
            onClick={() => handleLinkClick('/projects')}
          >
            <div className="flex gap-1">
              <MdOutlineWorkOutline />
              <span>Projects</span>
            </div>
            {activeLink === '/projects' && (
              <ul>
                <Link href="/projects">
                  <li>All Projects</li>
                </Link>
                <Link href="/projects/draftProjects">
                  <li>Draft Projects</li>
                </Link>
                <Link href="/projects/addProject">
                  <li>Add Project</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === '/shops'
                ? 'navActive flex-col flex-left'
                : 'flex-col flex-left'
            }
            onClick={() => handleLinkClick('/shops')}
          >
            <div className="flex gap-1">
              <CgShoppingCart />
              <span>Shops</span>
            </div>
            {activeLink === '/shops' && (
              <ul>
                <Link href="/shops">
                  <li>All Products</li>
                </Link>
                <Link href="/shops/draftProducts">
                  <li>Draft Products</li>
                </Link>
                <Link href="/shops/addProduct">
                  <li>Add Product</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === '/gallery'
                ? 'navActive flex-col flex-left'
                : 'flex-col flex-left'
            }
            onClick={() => handleLinkClick('/gallery')}
          >
            <div className="flex gap-1">
              <GrGallery />
              <span>Gallery</span>
            </div>
            {activeLink === '/gallery' && (
              <ul>
                <Link href="/gallery">
                  <li>All Photos</li>
                </Link>
                <Link href="/gallery/addPhoto">
                  <li>Add Photo</li>
                </Link>
              </ul>
            )}
          </li>
          <Link href="/contacts">
            <li
              className={activeLink === '/contacts' ? 'navActive' : ''}
              onClick={() => handleLinkClick('/contacts')}
            >
              <RiContactsBook3Line />
              <span>Contacts</span>
            </li>
          </Link>
          <Link href="/settings">
            <li
              className={activeLink === '/settings' ? 'navActive' : ''}
              onClick={() => handleLinkClick('/settings')}
            >
              <IoIosSettings />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
        <button className="logoutBtn">Logout</button>
      </aside>
    </>
  );
}
