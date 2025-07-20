'use client'
import classNames from 'classnames'
import { useState } from 'react'

import TripData from '@/lib/trip.json'

export default function OptionsSection({ optionName }: { optionName: 'food' | 'stay' }) {
  const data = TripData.data[0]
  let option

  if (optionName === 'food') {
    option = data.foodOptions
  } else {
    option = data.stayOptions
  }

  const [activeFilter, setActiveFilter] = useState(option.filters[0])
  const [activeLocation, setActiveLocation] = useState(option.locations[0])

  return (
    <div className="flex flex-col items-stretch text-sm">
      <div>
        <div className="flex w-full gap-6">
          <div className="w-[265px] shrink-0">
            <div className="pt-5 pb-[30px] text-xl font-medium text-[#333]">
              <span className="capitalize">{optionName} Options</span>
            </div>
            {option.locations.map((location, index) => (
              <div
                key={index}
                className={classNames(
                  'mb-4 cursor-pointer rounded-sm border px-4 py-3.5',
                  activeLocation === location ? 'bg-[#222] text-white' : 'border-[#e8e8e8] bg-white'
                )}
                onClick={() => setActiveLocation(location)}
              >
                <div className="text-[16px] font-medium">{location}</div>
              </div>
            ))}
          </div>
          <div className="_1u80jhm6">
            <div className="mb-5 flex border-b">
              <ul
                className="ant-menu-horizontal ant-menu-light clear-both m-0 flex w-full min-w-full list-none p-0 text-sm outline-none"
                data-menu-list="true"
                role="menu"
                tabIndex={0}
              >
                {option.filters.map((filter, index) => (
                  <li
                    key={index}
                    data-menu-id="rc-menu-uuid-80673-1-Budget"
                    role="menuitem"
                    tabIndex={-1}
                    className={classNames(
                      'rounded-0 relative top-px -mt-px mb-0 inline-block cursor-pointer border-b-2 bg-transparent px-4 align-middle whitespace-nowrap hover:border-b-2 hover:border-b-[#1677ff] hover:text-[#1677ff] hover:shadow-none',
                      activeFilter === filter ? 'border-b-[#1677ff] text-[#1677ff]' : 'opacity-85'
                    )}
                    onClick={() => setActiveFilter(filter)}
                  >
                    <span
                      aria-label="compass"
                      className="align-top-[-0.125em] rounded-0 px-4-icon relative top-px -mt-px mb-0 inline-flex min-w-3.5 items-center text-center align-middle text-sm leading-0"
                      role="img"
                    >
                      <svg
                        aria-hidden="true"
                        data-icon="compass"
                        fill="currentColor"
                        focusable="false"
                        height="1em"
                        viewBox="64 64 896 896"
                        width="1em"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 00-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 00-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z" />
                      </svg>
                    </span>
                    <span className="menu-title-content">{filter}</span>
                  </li>
                ))}
              </ul>
              <div aria-hidden="true" style={{ display: 'none' }} />
            </div>
            <div className="_1u80jhm8">
              {(option.data as any)[activeLocation][activeFilter].map(
                (item: any, index: number) => (
                  <div key={index} className="mr-5 overflow-hidden">
                    <img
                      alt="Taj Jaisalmer"
                      className="h-[180px] w-full rounded-lg object-cover"
                      data-nimg={1}
                      decoding="async"
                      fetchPriority="high"
                      height={180}
                      src={item.image}
                      style={{ color: 'transparent' }}
                      width={300}
                    />
                    <div className="px-2 py-3 text-[16px] font-medium">{item.title}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
