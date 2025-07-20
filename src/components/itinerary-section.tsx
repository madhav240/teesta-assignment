'use client'
import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

import TripData from '@/lib/trip.json'

export default function ItinerarySection() {
  const data = TripData.data[0]

  const [activeDay, setActiveDay] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const dayRefs = useRef<(HTMLDivElement | null)[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dayIndex = dayRefs.current.findIndex((ref) => ref === entry.target)
            if (dayIndex !== -1) {
              setActiveDay(dayIndex)
            }
          }
        })
      },
      {
        root: null,
        threshold: 0.1,
      }
    )

    dayRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [isScrolling])

  const scrollToDay = useCallback((dayIndex: number) => {
    if (!dayRefs.current[dayIndex]) return

    setIsScrolling(true)
    setActiveDay(dayIndex)

    const dayElement = dayRefs.current[dayIndex]

    dayElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setTimeout(() => setIsScrolling(false), 1000)
  }, [])

  const handleDayClick = (e: React.MouseEvent, dayIndex: number) => {
    e.preventDefault()
    e.stopPropagation()
    scrollToDay(dayIndex)
  }

  return (
    <div className="flex w-full flex-col items-stretch" style={{ gap: 16 }}>
      <span className="sticky top-6 z-20 px-2 text-left text-3xl font-medium text-[#424242]">
        {' '}
        Itinerary
      </span>
      <div className="flex flex-col gap-2.5 text-sm lg:flex-row">
        <div
          className="sticky top-0 z-20 flex h-full w-screen shrink-0 flex-row items-stretch overflow-x-auto overflow-y-auto bg-white px-2 py-4 lg:top-[4.8rem] lg:w-[137px] lg:flex-col"
          style={{ gap: 12 }}
        >
          {data.itinerary.map((day, index) => (
            <button
              key={index}
              className={classNames(
                'flex h-[58px] w-auto cursor-pointer flex-col items-start justify-center gap-1 rounded-lg border border-solid px-4 py-2',
                activeDay === index ? 'border-[#202020] bg-[#202020]' : 'border-gray-300 bg-white'
              )}
              onClick={(e) => handleDayClick(e, index)}
            >
              <span
                className={classNames(
                  'm-0 text-sm font-medium',
                  activeDay === index ? 'text-white' : 'text-[#606060]'
                )}
              >
                {day.day}
              </span>
              <span
                className={classNames(
                  'm-0 text-xs',
                  activeDay === index ? 'text-white' : 'text-[#909090]'
                )}
              >
                {day.title.split(' ').slice(-1)[0]}
              </span>
            </button>
          ))}
        </div>

        <div className="flex w-full grow">
          <div className="scroll-w-none relative w-full max-w-[720px] scroll-pt-5 scroll-smooth p-5">
            {data.itinerary.map((day, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  dayRefs.current[index] = el
                  return void 0
                }}
                className="scroll-m-24"
              >
                <div className="scroll-w-none relative clear-both mb-[144px] flex w-full min-w-full list-none flex-col items-stretch overflow-y-auto text-sm">
                  <div className="relative flex flex-col items-stretch pl-7">
                    <div className="absolute left-0.5 flex bg-white">
                      <img alt="location" src="/images/dayIcon.svg" />
                    </div>
                    <div
                      className="absolute top-0 bottom-0 left-3.5 mt-[30px] w-0.5"
                      style={{
                        backgroundImage: 'linear-gradient(#d9d9d9 50%,transparent 0)',
                        backgroundSize: '10px 20px',
                      }}
                    />
                    <div className="mb-6 flex w-[90%] flex-col items-stretch pb-6">
                      <p className="mb-2 text-2xl font-medium">
                        {day.day}
                        {/* */}: {/* */}
                        {day.title}
                      </p>
                      <p className="text-decoration-skip-ink mb-3 text-left text-[#202020]">
                        {day.description}
                      </p>
                      <img
                        alt={day.title}
                        className="mb-6 rounded-lg object-cover lg:h-[480px] lg:w-[580px]"
                        src={day.image}
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col items-stretch pl-7">
                    <div className="absolute top-0 bottom-0 left-3.5 z-[1] w-0.5 bg-[#202020]" />
                    {day.items.map((item, index) => (
                      <div key={index} className="relative mb-16">
                        <div className="absolute top-0 -left-7 z-[2] flex size-[30px] items-center justify-center rounded-[50%] border border-[#d9d9d9] bg-[#606060]">
                          <img
                            alt={item.type}
                            className="h-[20px] w-[20px]"
                            data-nimg={1}
                            decoding="async"
                            height={20}
                            loading="lazy"
                            src="/images/location_white.png"
                            style={{ color: 'transparent' }}
                            width={20}
                          />
                        </div>
                        <div
                          className="flex flex-col items-stretch overflow-hidden rounded-lg bg-white"
                          style={{ gap: 12 }}
                        >
                          <div className="flex flex-col items-stretch pl-2" style={{ gap: 12 }}>
                            <div className="m-0 flex items-center justify-between pr-2.5 text-lg font-medium lg:w-[600px]">
                              <span>{item.name}</span>
                              <button
                                className="relative inline-flex h-8 cursor-pointer touch-manipulation justify-center gap-2 rounded-md border-none bg-none px-[15px] py-1 text-center text-[16px] leading-normal font-medium whitespace-nowrap text-[#0077c2] underline decoration-[#0077c2] shadow-xs outline-none select-none"
                                type="button"
                              >
                                <span>+Add</span>
                              </button>
                            </div>
                            <div className="flex">
                              <a
                                className="cursor-pointer bg-transparent text-[16px] text-[#0077c2] underline decoration-[#0077c2] outline-none hover:text-[#69b1ff] hover:no-underline"
                                href={item.link}
                              >
                                {item.name}
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch" style={{ gap: 12 }}>
                            <p className="text-decoration-skip-ink mb-4 text-left text-sm text-[#202020] lg:w-[600px]">
                              {item.description}
                            </p>
                            <img
                              alt={item.name}
                              className="h-[480px] rounded-lg object-cover lg:w-[580px]"
                              src={item.image}
                            />
                            <div className="hidden w-full items-center" />
                            <a
                              className="relative flex h-[56px] cursor-pointer touch-manipulation items-center justify-between gap-2 rounded-xl bg-linear-[90deg,#e92d5d_3.37%,#95177a] px-[15px] py-1 text-center text-[16px] font-medium whitespace-nowrap text-white select-none hover:bg-linear-[#4096ff] lg:w-[580px]"
                              href={item.teesta_link}
                              tabIndex={0}
                              target="_blank"
                              style={{
                                boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
                              }}
                            >
                              <span>Book from Teesta</span>
                              <span
                                aria-label="right"
                                className="align-top-[-0.125em] inline-block items-center text-center leading-0"
                                role="img"
                              >
                                <svg
                                  aria-hidden="true"
                                  data-icon="right"
                                  fill="currentColor"
                                  focusable="false"
                                  height="1em"
                                  viewBox="64 64 896 896"
                                  width="1em"
                                >
                                  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
