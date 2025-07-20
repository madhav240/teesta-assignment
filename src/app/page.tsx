import classNames from 'classnames'
import { Fragment } from 'react'

import ItinerarySection from '@/components/itinerary-section'
import Navbar from '@/components/navbar'
import OptionsSection from '@/components/options-section'
import TripData from '@/lib/trip.json'

export default function Home() {
  const data = TripData.data[0]

  return (
    <>
      <Navbar />

      <div className="flex flex-col bg-[#f5f5f5] text-sm">
        <main>
          <div className="flex items-center justify-center bg-white p-2 lg:px-[6%] lg:pt-[3%] lg:pb-[6%]">
            <div className="flex flex-col items-stretch" style={{ maxWidth: 1448, gap: 24 }}>
              <div className="flex flex-col items-stretch">
                <div>
                  <div className="flex flex-col flex-wrap lg:-mr-1 lg:-ml-1" style={{ rowGap: 8 }}>
                    <div
                      className="relative flex lg:w-7/12"
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        alt="hotel"
                        className="h-96 w-full rounded-t-[20px] object-cover lg:h-[434px] lg:rounded-tr-none"
                        data-nimg={1}
                        decoding="async"
                        height={432}
                        loading="lazy"
                        src={data.hero.images[0]}
                        style={{ color: 'transparent' }}
                        width={735}
                      />
                    </div>
                    <div
                      className="relative flex lg:w-5/12"
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <div className="flex flex-wrap lg:-mr-1 lg:-ml-1" style={{ rowGap: 8 }}>
                        {data.hero.images.slice(1).map((image, index) => (
                          <div
                            key={index}
                            className="flex w-1/2"
                            style={{ paddingLeft: 4, paddingRight: 4 }}
                          >
                            <img
                              alt="hotel"
                              decoding="async"
                              height={210}
                              loading="lazy"
                              src={image}
                              style={{ color: 'transparent' }}
                              width={261}
                              className={classNames(
                                'h-[212px] w-full object-cover',
                                index === 1 && 'lg:rounded-tr-[20px]',
                                index === 2 && 'rounded-bl-[20px] lg:rounded-bl-none',
                                index === 3 && 'rounded-br-[20px]'
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex h-full flex-col items-stretch px-2 lg:w-[763px] lg:px-0"
                style={{ gap: 24 }}
              >
                <div className="flex text-4xl font-medium">
                  <span>{data.hero.title}</span>
                </div>
                <div
                  className="flex flex-col flex-wrap items-stretch rounded-lg"
                  style={{ gap: 16 }}
                >
                  <div className="flex items-center">
                    <span
                      aria-label="clock-circle"
                      className="align-top-[-0.125em] inline-flex items-center pr-2 text-center text-lg text-[#606060]"
                      role="img"
                    >
                      <svg
                        aria-hidden="true"
                        data-icon="clock-circle"
                        fill="currentColor"
                        focusable="false"
                        height="1em"
                        viewBox="64 64 896 896"
                        width="1em"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-[#424242]">
                      {data.itinerary.length} days
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span
                      aria-label="environment"
                      className="inline-flex items-center pr-2 text-center text-lg text-[#606060]"
                      role="img"
                    >
                      <svg
                        aria-hidden="true"
                        data-icon="environment"
                        fill="currentColor"
                        focusable="false"
                        height="1em"
                        viewBox="64 64 896 896"
                        width="1em"
                      >
                        <path d="M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z" />
                      </svg>
                    </span>
                    {data.creator.tags.map((tag, index) => (
                      <Fragment key={index}>
                        <span className="text-[13px] text-[#606060]">{tag}</span>

                        {index < data.creator.tags.length - 1 && (
                          <span className="mx-1.5 pt-[3px] text-[10px] text-[#606060]">⮕</span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <div className="flex justify-start">
                    <span
                      aria-label="calendar"
                      className="align-top-[-0.125em] inline-flex items-center pr-2 text-center text-lg leading-0 text-[#606060]"
                      role="img"
                    >
                      <svg
                        aria-hidden="true"
                        data-icon="calendar"
                        fill="currentColor"
                        focusable="false"
                        height="1em"
                        viewBox="64 64 896 896"
                        width="1em"
                      >
                        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
                      </svg>
                    </span>
                    <p className="m-0 text-sm text-[#404040]">
                      Total cost:{/* */}{' '}
                      <span className="text-sm font-medium text-[#202020]">{data.hero.price}</span>
                    </p>
                  </div>
                </div>
                <div
                  className="divider clear-both flex w-full min-w-full"
                  role="separator"
                  style={{ margin: 0 }}
                />
                <div className="flex items-center lg:h-14" style={{ gap: 16 }}>
                  <div className="relative inline-block h-[50px] rounded-[50%] bg-[linear-gradient(45deg,#ff001f,#fe5005,#a449ff,#33ceff,#ffd600)] p-px">
                    <span className="relative m-0 inline-flex size-12 list-none items-center justify-center overflow-hidden rounded-[50%] border border-transparent bg-transparent p-0 text-center align-middle text-sm whitespace-nowrap text-white">
                      <img src={data.creator.creator_profile_pic} />
                    </span>
                    <img
                      alt="Pen Icon"
                      className="absolute right-[-3px] -bottom-0.5 z-10 h-[23px] w-6"
                      data-nimg={1}
                      decoding="async"
                      height={18}
                      loading="lazy"
                      src="/images/penIcon.svg"
                      style={{ color: 'transparent' }}
                      width={18}
                    />
                  </div>
                  <div className="ml-2.5 flex flex-col items-stretch" style={{ gap: 8 }}>
                    <div className="flex">
                      <span className="text-left text-xl font-medium text-[#606060]">
                        Trip is created by
                      </span>
                      <span
                        className="text-left text-xl font-medium"
                        style={{ color: '#202020', marginLeft: 4 }}
                      >
                        {' '}
                        {/* */}
                        {data.creator.createdBy}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-xs text-[#606060]">{data.creator.description}</span>
                    </div>
                  </div>
                </div>
                <div
                  className="divider clear-both flex w-full min-w-full"
                  role="separator"
                  style={{ margin: 0 }}
                />
                <div className="flex flex-col items-stretch" style={{ gap: 24 }}>
                  <span className="text-decoration-skip-ink mb-3.5 text-left text-xl font-medium text-[#202020]">
                    Trip Notes
                  </span>
                  <div className="flex flex-col items-stretch">
                    {data.notes.map((note, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-stretch"
                        style={{ padding: 0, gap: 8 }}
                      >
                        <div className="flex">
                          <span className="text-decoration-skip-ink text-left text-[16px] font-medium text-[#202020]">
                            {note.title}
                          </span>
                        </div>
                        <div className="flex">
                          <span className="text-decoration-skip-ink m-0 text-left text-sm text-[#202020]">
                            {note.description}
                          </span>
                        </div>
                        <div className="flex">
                          <ul className="my-3.5 ml-4 list-disc pl-4">
                            {note.details.map((detail, index) => (
                              <li
                                key={index}
                                className="text-decoration-skip-ink m-0 text-left text-sm text-[#202020]"
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex pr-2" style={{ gap: 8 }}>
                          {note.images.map((image, index) => (
                            <img
                              key={index}
                              alt="Trip Notes"
                              className="h-[336px] w-1/2 rounded-xl object-cover"
                              decoding="async"
                              height={336}
                              loading="lazy"
                              src={image}
                              srcSet={image}
                              style={{ color: 'transparent' }}
                              width={584}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="divider clear-both my-12 flex w-full min-w-full" role="separator" />
              <ItinerarySection />

              <div
                className="flex h-full flex-col items-stretch px-2 lg:w-[763px]"
                style={{ gap: 24 }}
              >
                {data.notes.map((note, index) => (
                  <div key={index} className="flex flex-col items-stretch" style={{ gap: 16 }}>
                    <span className="text-left text-[28px] font-medium text-[#424242]">
                      {note.title}
                    </span>
                    <div className="flex flex-col items-stretch" style={{ gap: 24 }}>
                      <span className="text-decoration-skip-ink mb-3.5 text-left text-xl font-medium text-[#202020]">
                        Trip Notes
                      </span>
                      <div className="flex flex-col items-stretch">
                        <div className="flex flex-col items-stretch" style={{ padding: 0, gap: 8 }}>
                          <div className="flex">
                            <span className="text-decoration-skip-ink text-left text-[16px] leading-6 font-medium text-[#202020]">
                              {note.title}
                            </span>
                          </div>
                          <div className="flex">
                            <span className="text-decoration-skip-ink m-0 text-left text-sm text-[#202020]">
                              {note.description}
                            </span>
                          </div>
                          <div className="flex">
                            <ul className="my-3.5 ml-4 list-disc pl-4">
                              {note.details.map((detail, index) => (
                                <li
                                  key={index}
                                  className="text-decoration-skip-ink m-0 text-left text-sm text-[#202020]"
                                >
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex pr-2" style={{ gap: 8 }}>
                            {note.images.map((image, index) => (
                              <img
                                key={index}
                                alt="Trip Notes"
                                className="h-[336px] w-1/2 rounded-xl object-cover"
                                data-nimg={1}
                                decoding="async"
                                height={336}
                                loading="lazy"
                                src={image}
                                style={{ color: 'transparent' }}
                                width={584}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="divider clear-both my-12 flex w-full min-w-full" role="separator" />

                <div
                  className="flex flex-col items-stretch text-sm"
                  style={{ gap: 16, color: 'rgba(0, 0, 0, 0.88)' }}
                >
                  <span className="text-left text-[28px] font-medium text-[#424242]">
                    {data.totalCost.title}
                  </span>
                  <div className="mb-8 flex w-full flex-col items-stretch text-sm">
                    <div className="clear-both flex w-full text-sm">
                      <div className="relative w-full">
                        <div className="relative w-full" style={{ transition: 'opacity 0.3s' }}>
                          <div className="table w-full text-sm">
                            <div className="table-container relative w-full rounded-ss-lg rounded-se-lg">
                              <div className="w-full">
                                <table
                                  className="w-full"
                                  style={{ tableLayout: 'fixed', width: '100%' }}
                                >
                                  <colgroup>
                                    <col style={{ width: '70%' }} />
                                    <col style={{ width: '30%' }} />
                                  </colgroup>
                                  <thead>
                                    <tr className="text-sm text-[#202020]">
                                      <th
                                        className="relative table-cell rounded-ss-lg border-b border-b-[#f0f0f0] bg-[#fafafa] px-2 py-3 font-semibold wrap-break-word"
                                        scope="col"
                                        style={{ textAlign: 'left', color: 'rgba(0, 0, 0, 0.88)' }}
                                      >
                                        Service Name
                                      </th>
                                      <th
                                        className="relative table-cell rounded-se-lg border-b border-b-[#f0f0f0] bg-[#fafafa] px-2 py-3 font-semibold wrap-break-word"
                                        scope="col"
                                        style={{ textAlign: 'left', color: 'rgba(0, 0, 0, 0.88)' }}
                                      >
                                        Price
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data.totalCost.breakdown.map((item, index) => (
                                      <tr key={index}>
                                        <td
                                          className="relative table-cell border-b px-2 py-3 wrap-break-word"
                                          style={{ textAlign: 'left' }}
                                        >
                                          {item.item}
                                        </td>
                                        <td
                                          className="relative table-cell border-b px-2 py-3 wrap-break-word"
                                          style={{ textAlign: 'left' }}
                                        >
                                          {item.price}
                                        </td>
                                      </tr>
                                    ))}

                                    <tr className="font-medium">
                                      <td
                                        className="relative table-cell border-b px-2 py-3 wrap-break-word"
                                        style={{ textAlign: 'left' }}
                                      >
                                        TOTAL COST
                                      </td>
                                      <td
                                        className="relative table-cell border-b px-2 py-3 wrap-break-word"
                                        style={{ textAlign: 'left' }}
                                      >
                                        {data.totalCost.total}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider clear-both my-12 flex w-full min-w-full" role="separator" />

              <div className="flex flex-col items-stretch text-sm" style={{ gap: 130 }}>
                <OptionsSection optionName="stay" />

                <OptionsSection optionName="food" />
              </div>
              <div
                className="divider clear-both mx-12 flex w-full min-w-full list-none p-0 text-sm"
                role="separator"
              />
              <div className="flex w-full flex-col items-stretch px-2 text-sm" style={{ gap: 16 }}>
                <div className="flex w-full flex-col items-stretch text-sm" style={{ gap: 16 }}>
                  <div className="flex items-center justify-between text-sm">
                    <p className="m-0 p-0 text-xl font-medium text-[#202020]">Frequently Asked</p>
                    <div className="flex cursor-pointer items-center text-sm" style={{ gap: 6 }}>
                      <img
                        alt="Add"
                        className="size-6 rounded-[50%] bg-[#dbf2ff] p-[5px]"
                        data-nimg={1}
                        decoding="async"
                        height={24}
                        loading="lazy"
                        src="/images/+.png"
                        style={{ color: 'transparent' }}
                        width={24}
                      />
                      <p className="text-sm font-medium text-[#0077c2]">Ask a Question</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-stretch text-sm" style={{ gap: 34 }}>
                    {data.faq.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-stretch text-sm"
                        style={{ gap: 8 }}
                      >
                        <p className="m-0 text-[16px] font-medium text-[#202020]">
                          Q{index + 1}: {item.question}
                        </p>
                        <div className="ml-5 flex flex-wrap items-center" style={{ gap: 4 }}>
                          <span
                            className="relative m-0 inline-flex list-none items-center justify-center overflow-hidden rounded-[50%] border bg-transparent p-0 text-center align-middle text-lg whitespace-nowrap text-white"
                            style={{ width: 24, height: 24, fontSize: 18 }}
                          >
                            <img
                              className="h-full w-full object-cover"
                              src="https://firebasestorage.googleapis.com/v0/b/teesta-4c798.appspot.com/o/profile_pic%2F1234567890_9e1a86ac-f95f-41ab-919a-9fe766b37f6c.jpg?alt=media&token=94949889-186f-44ad-a9fc-498e4b82d902"
                            />
                          </span>
                          <span className="text-[16px] text-[#909090]">Test User</span>
                          <span className="m-0 text-[16px] text-[#909090]">
                            asked on 13 Apr 2025
                          </span>
                        </div>
                        <div
                          className="ml-5 flex flex-col items-stretch text-sm"
                          style={{ gap: 8 }}
                        >
                          <div>
                            <span className="m-0 text-[16px] font-medium text-[#202020]">A:</span>
                            &nbsp;
                            <span className="m-0 text-sm text-[#202020]">{item.answer}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex flex-wrap items-center" style={{ gap: 6 }}>
                              <span
                                className="relative m-0 inline-flex list-none items-center justify-center overflow-hidden rounded-[50%] border bg-transparent p-0 text-center align-middle text-lg whitespace-nowrap text-white"
                                style={{ width: 24, height: 24, fontSize: 18 }}
                              >
                                <img
                                  className="h-full w-full object-cover"
                                  src="https://firebasestorage.googleapis.com/v0/b/teesta-4c798.appspot.com/o/profile_pic%2F1234567890_9e1a86ac-f95f-41ab-919a-9fe766b37f6c.jpg?alt=media&token=94949889-186f-44ad-a9fc-498e4b82d902"
                                />
                              </span>
                              <span className="text-[16px] text-[#909090]">Test User</span>
                              <span className="m-0 text-[16px] text-[#909090]">
                                answered on 13 Apr 2025
                              </span>
                            </div>
                            <div className="flex items-center" style={{ gap: 4 }}>
                              <img
                                alt="Add"
                                className="size-5 rounded-[50%] bg-[#dbf2ff] p-[5px]"
                                data-nimg={1}
                                decoding="async"
                                height={20}
                                loading="lazy"
                                src="/images/+.png"
                                style={{ color: 'transparent' }}
                                width={20}
                              />
                              <a className="text-xs font-medium text-[#0077c2]">Write Answer</a>
                            </div>
                          </div>
                        </div>
                        <button
                          className="relative ml-5 inline-flex h-8 w-fit touch-manipulation items-center justify-center gap-2 rounded-md border border-[#0077c2] bg-white px-2.5 py-4 text-center text-sm font-medium whitespace-nowrap text-[#0077c2] shadow select-none"
                          type="button"
                        >
                          <span>Show All Answers</span>
                        </button>
                      </div>
                    ))}

                    <button
                      className="relative inline-flex h-8 w-[150px] touch-manipulation items-center justify-center gap-2 rounded-md border border-[#0077c2] bg-white px-3.5 py-5 text-center text-[16px] font-medium whitespace-nowrap text-[#0077c2] shadow select-none"
                      type="button"
                    >
                      <span>Read All FAQ</span>
                    </button>
                  </div>
                  <div
                    className="_2xsxj7e divider clear-both flex w-full min-w-full list-none text-sm"
                    role="separator"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch px-2 text-sm" style={{ gap: 16 }}>
                <span className="text-left text-[28px] font-medium text-[#424242]">
                  Similar Trips
                </span>
                <div className="flex flex-col items-stretch text-sm" style={{ gap: 24 }}>
                  <div className="flex flex-col items-stretch text-sm" style={{ gap: 16 }}>
                    <div
                      className="grid grid-cols-3 text-sm lg:mr-[-11.5px] lg:ml-[-11.5px]"
                      style={{
                        rowGap: 23,
                      }}
                    >
                      {data.similarTrips.map((trip, index) => (
                        <div
                          key={index}
                          className="flex w-full text-sm"
                          style={{ paddingLeft: '11.5px', paddingRight: '11.5px' }}
                        >
                          <div className="flex flex-col items-stretch text-sm">
                            <img
                              alt="Similar Trips Image"
                              className="aspect-[26/15] rounded-lg object-cover"
                              data-nimg={1}
                              decoding="async"
                              height={220}
                              loading="lazy"
                              sizes="100vw"
                              src={trip.image}
                              width={416}
                              style={{
                                color: 'transparent',
                                width: '100%',
                                height: 'auto',
                              }}
                            />
                            <div
                              className="clear-both flex w-full min-w-full list-none flex-col items-stretch py-4 text-sm"
                              style={{ gap: 8 }}
                            >
                              <p className="_9845dd0">{trip.title}</p>
                              <p className="_9845dd1">
                                Goa{/* */}, {/* */}India
                              </p>
                              <div className="flex items-center text-sm" style={{ gap: 6 }}>
                                <p className="_9845dd0">{trip.price}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <footer>
                <div className="_1lu1ibj1 flex text-sm">
                  <section className="w-[calc(100%/3)] px-2">
                    <p className="text-[16px] font-semibold text-[#424242]">Services</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Flights</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Stays</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Cabs</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Experiences</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Bus</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Tour Guides</p>
                  </section>
                  <section className="w-[calc(100%/3)] px-2">
                    <p className="text-[16px] font-semibold text-[#424242]">Support</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Contact Us</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Email</p>
                  </section>
                  <section className="w-[calc(100%/3)] px-2">
                    <p className="text-[16px] font-semibold text-[#424242]">Teesta</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">About Us</p>
                    <p className="mt-1.5 cursor-pointer text-sm text-[#424242]">Careers</p>
                  </section>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-8 px-2 py-6 text-sm lg:gap-2">
                  <div className="clear-both flex gap-6 text-sm">
                    <p className="cursor-pointer text-xs text-[#909090]">© 2024 Teesta LLP</p>
                    <p className="cursor-pointer text-xs text-[#909090]">Privacy</p>
                    <p className="cursor-pointer text-xs text-[#909090]">Terms</p>
                    <p className="cursor-pointer text-xs text-[#909090]">Refund</p>
                  </div>
                  <div className="mr-5 flex gap-4 text-sm">
                    <a
                      href="https://www.instagram.com/teesta.travel/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span
                        aria-label="instagram"
                        className="align-top-[-0.125em] inline-flex cursor-pointer items-center text-center text-2xl leading-0 text-[#606060]"
                        role="img"
                      >
                        <svg
                          aria-hidden="true"
                          data-icon="instagram"
                          fill="currentColor"
                          focusable="false"
                          height="1em"
                          viewBox="64 64 896 896"
                          width="1em"
                        >
                          <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/teesta.travel/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span
                        aria-label="facebook"
                        className="align-top-[-0.125em] inline-flex cursor-pointer items-center text-center text-2xl leading-0 text-[#606060]"
                        role="img"
                      >
                        <svg
                          aria-hidden="true"
                          data-icon="facebook"
                          fill="currentColor"
                          focusable="false"
                          height="1em"
                          viewBox="64 64 896 896"
                          width="1em"
                        >
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/teesta.travel/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span
                        aria-label="twitter-square"
                        className="align-top-[-0.125em] inline-flex cursor-pointer items-center text-center text-2xl leading-0 text-[#606060]"
                        role="img"
                      >
                        <svg
                          aria-hidden="true"
                          data-icon="twitter-square"
                          fill="currentColor"
                          focusable="false"
                          height="1em"
                          viewBox="64 64 896 896"
                          width="1em"
                        >
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
