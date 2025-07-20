'use client'
import React, { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className="z-50 flex h-[8vh] items-center justify-between border-b-[2px] border-b-gray-100 bg-white px-2 py-2 sm:px-4">
        {/* Logo Section */}
        <section className="flex flex-shrink-0 items-center">
          <img
            alt="teesta_logo"
            className="h-8 w-auto sm:h-12 sm:w-auto"
            data-nimg={1}
            decoding="async"
            height={50}
            loading="lazy"
            src="/images/mainlogo.svg"
            style={{ color: 'transparent' }}
            width={180}
          />
        </section>

        {/* Search Section - Hidden on mobile, visible on tablet+ */}
        {/* <section className="mx-4 hidden max-w-md flex-1 items-center md:flex lg:mx-8 xl:mx-12">
          <div className="flex h-12 w-full justify-center rounded-3xl bg-[#f1f4f7] p-3">
            <span
              aria-label="search"
              className="inline-flex items-center text-center text-lg"
              role="img"
              style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 16 }}
            >
              <svg
                aria-hidden="true"
                data-icon="search"
                fill="currentColor"
                focusable="false"
                height="1em"
                viewBox="64 64 896 896"
                width="1em"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
              </svg>
            </span>
            <input
              className="inline-block w-full rounded-md bg-transparent px-2.5 py-1 text-sm text-ellipsis outline-none"
              defaultValue=""
              placeholder="Search anything related to travel"
              style={{ color: '#909090' }}
              type="text"
            />
          </div>
        </section> */}

        {/* Right Section - Desktop */}

        {/* <section className="hidden flex-shrink-0 items-center lg:flex">
          <a
            className="mx-2.5 hidden text-sm font-medium whitespace-nowrap lg:block lg:text-lg"
            href="https://teesta-partner-web.vercel.app"
          >
            <p>Partner with Teesta</p>
          </a>
          <svg
            aria-hidden="true"
            className="svg-inline--fa fa-bell"
            color="rgba(0, 0, 0, 0.85)"
            data-icon="bell"
            data-prefix="fal"
            focusable="false"
            role="img"
            style={{ height: 20, width: 20, margin: '0 15px' }}
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16.8c80.9 8 144 76.2 144 159.2l0 29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3L44.3 416C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1L64 192c0-83 63.1-151.2 144-159.2L208 16zm16 48C153.3 64 96 121.3 96 192l0 29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3l359.4 0c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2l0-29.1c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z"
              fill="currentColor"
            />
          </svg>
          <div>
            <img
              alt="dummy_user"
              className="h-8 w-8 sm:h-10 sm:w-10"
              data-nimg={1}
              decoding="async"
              height={36}
              loading="lazy"
              src="/images/user.jpeg"
              width={36}
              style={{
                color: 'transparent',
                borderRadius: '50%',
                cursor: 'pointer',
                objectFit: 'cover',
              }}
            />
          </div>
        </section> */}

        <section className="align-top-[-0.125em] antiliased ml-[200px] hidden h-12 w-1/3 justify-center rounded-3xl bg-[#f1f4f7] p-3 lg:flex">
          <span
            aria-label="search"
            className="inline-flex items-center text-center text-lg"
            role="img"
            style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 16 }}
          >
            <svg
              aria-hidden="true"
              data-icon="search"
              fill="currentColor"
              focusable="false"
              height="1em"
              viewBox="64 64 896 896"
              width="1em"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </span>
          <input
            className="inline-block w-full rounded-md px-2.5 py-1 text-sm text-ellipsis outline-none"
            defaultValue=""
            placeholder="Search anything related to travel"
            style={{ color: '#909090' }}
            type="text"
          />
        </section>
        <section className="hidden items-center lg:flex">
          <a className="mx-2.5 text-lg font-medium" href="https://teesta-partner-web.vercel.app">
            <p>Partner with Teesta</p>
          </a>
          <svg
            aria-hidden="true"
            className="svg-inline--fa fa-bell"
            color="rgba(0, 0, 0, 0.85)"
            data-icon="bell"
            data-prefix="fal"
            focusable="false"
            role="img"
            style={{ height: 24, width: 24, margin: '0 30px' }}
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16.8c80.9 8 144 76.2 144 159.2l0 29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3L44.3 416C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1L64 192c0-83 63.1-151.2 144-159.2L208 16zm16 48C153.3 64 96 121.3 96 192l0 29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3l359.4 0c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2l0-29.1c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z"
              fill="currentColor"
            />
          </svg>
          <div>
            <img
              alt="dummy_user"
              data-nimg={1}
              decoding="async"
              height={36}
              loading="lazy"
              src="/images/user.jpeg"
              width={36}
              style={{
                color: 'transparent',
                borderRadius: '50%',
                cursor: 'pointer',
                objectFit: 'cover',
                width: 43,
                height: 42,
              }}
            />
          </div>
        </section>

        {/* Mobile Menu Button */}
        <section className="flex items-center lg:hidden">
          <button
            className="cursor-pointer rounded-md p-2 text-gray-600 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </section>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden">
          <div className="fixed top-0 right-0 left-0 border-t border-gray-200 bg-white shadow-lg">
            {/* Mobile Search */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex h-12 w-full rounded-3xl bg-[#f1f4f7] p-3">
                <span
                  aria-label="search"
                  className="inline-flex items-center text-center text-lg"
                  role="img"
                  style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 16 }}
                >
                  <svg
                    aria-hidden="true"
                    data-icon="search"
                    fill="currentColor"
                    focusable="false"
                    height="1em"
                    viewBox="64 64 896 896"
                    width="1em"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                  </svg>
                </span>
                <input
                  className="inline-block w-full rounded-md bg-transparent px-2.5 py-1 text-sm text-ellipsis outline-none"
                  defaultValue=""
                  placeholder="Search anything related to travel"
                  style={{ color: '#909090' }}
                  type="text"
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-4 p-4">
              <a
                className="block text-lg font-medium text-gray-900 hover:text-gray-600"
                href="https://teesta-partner-web.vercel.app"
              >
                Partner with Teesta
              </a>

              <div className="flex items-center space-x-4 pt-2">
                <svg
                  aria-hidden="true"
                  className="svg-inline--fa fa-bell"
                  color="rgba(0, 0, 0, 0.85)"
                  data-icon="bell"
                  data-prefix="fal"
                  focusable="false"
                  role="img"
                  style={{ height: 24, width: 24 }}
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16.8c80.9 8 144 76.2 144 159.2l0 29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3L44.3 416C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1L64 192c0-83 63.1-151.2 144-159.2L208 16zm16 48C153.3 64 96 121.3 96 192l0 29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3l359.4 0c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2l0-29.1c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <img
                    alt="dummy_user"
                    data-nimg={1}
                    decoding="async"
                    height={36}
                    loading="lazy"
                    src="/images/user.jpeg"
                    width={36}
                    style={{
                      color: 'transparent',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      objectFit: 'cover',
                      width: 36,
                      height: 36,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute mt-8 flex w-full items-center justify-center">
              <button
                className="relative right-0 left-0 mx-auto flex size-14 items-center justify-center space-x-4 rounded-full bg-white p-2 text-center text-4xl font-medium"
                onClick={toggleMobileMenu}
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
