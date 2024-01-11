import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Faq = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="demo"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <h1 className="text-center mb-5 font-bold text-6xl">Faq</h1>
          <h1 className="text-center mt-5 mb-2 font-bold text-4xl">
            After Registration
          </h1>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>
                  Minsa, when will we get our LoA and Invoice? Where
                  was it sent?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The committee will send LoA and Invoice no later
                  than 3 working days after you register. We will send
                  the LoA and Invoice to the team leaders email, so
                  make sure you include a valid and correct email
                  address!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>
                  Minsa, I registered a week ago but how come I have
                  not received the LoA and Invoice yet?.
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Try checking the spam folder in your team leaders
                  email, maybe the email from the IYSA team will go to
                  the spam folder
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>
                  Where to upload the competition file, Minsa?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Upload the files requested by the committee to the
                  Google Drive link that we have included in your LoA,
                  make sure you read the LoA carefully, OK!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <span>
                  I want to pay the registration fee but how come I
                  can not find the invoice? and where is the payment
                  transferred?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Come on, have you read LoA to the end yet? Because
                  we will send the invoice with your teams LoA, make
                  sure you have read the email from us to the end! For
                  payment, you can transfer to the account listed on
                  the invoice. Make sure you pay according to the
                  nominal stated on the invoice, okay!.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-6"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-6"
              >
                <span>
                  Minsa, I have already paid the registration fee.
                  Where can I upload the proof of payment?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-6"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-6"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  If you have made a payment, you can upload the proof
                  to the link listed on the invoice, and make sure you
                  fill in and upload the proof of transfer correctly
                  so that the committee can record it correctly too.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-6"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-6"
              >
                <span>When will the receipt be sent to us?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-6"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-6"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We will send a receipt for payment in a maximum of 7
                  working days to the team leaders email, after you
                  have uploaded proof of payment!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-7">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-7"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-7"
              >
                <span>
                  Minsa, one more week for judging, how come I have
                  not received my teams presentation schedule yet?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-7"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-7"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We will send the online participant presentation
                  schedule no later than 2 days before the judging
                  takes place to the whatsapp group and also the team
                  leaders email. Make sure you diligently check the
                  information we provide on the Whatsapp group and
                  also email!
                </p>
              </div>
            </div>
          </div>

          {/* faq 2 */}

          <div
            className="mt-5"
            id="accordion-collapses"
            data-accordion="collapses"
          >
            <h1 className="text-center mb-2 mt-5 font-bold text-4xl">
              During The Event
            </h1>
            <h2 id="accordion-collapse-headings-8">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-8"
                aria-expanded="true"
                aria-controls="accordion-collapse-bodys-8"
              >
                <span>
                  When will the presentation schedule be given by the
                  committee?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-8"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-8"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We will provide a presentation schedule no later
                  than 2 days before the judging takes place or it
                  could be earlier, and we will send it via the WA
                  group and also the team leaders e-mail.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-9">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-9"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-9"
              >
                <span>
                  What application used for online presentation? Zoom,
                  Google Meet or something else?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-9"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-9"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  For online judging, we always use the Zoom
                  application and make sure your Zoom application is
                  up to date.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-10">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-10"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-10"
              >
                <span>
                  When will the zoom link be given by the committee?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-10"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-10"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We will provide a Zoom link on the judging day, and
                  we will send it periodically to the group according
                  to your teams presentation time
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-11">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-11"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-11"
              >
                <span>
                  We will provide a Zoom link on the judging day, and
                  we will send it periodically to the group according
                  to your teams presentation time
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-11"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-11"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  You can enter Zoom with a maximum of 5 accounts for
                  participants, and all Zoom accounts must follow the
                  name format that we have provided, namely "Room
                  Number_Team Leader Name_Institution Name"
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-12">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-12"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-12"
              >
                <span>
                  how long will the participants make the
                  presentation?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-12"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-12 "
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  You will be given 15 minutes for 1 presentation
                  session which will be divided into 2, namely the
                  initial 7 minutes for the presentation and the final
                  8 minutes for the question and answer session with
                  the jury
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-13">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-13"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-13"
              >
                <span>
                  How many judges will come to the offline
                  participants booth?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-13"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-13"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Just like online judging, there will be 2 judges
                  judging each team. And after being judged you will
                  be given a sticker as a sign that your booth has
                  been judged, make sure you get 2 stickers
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-14">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-14"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-14"
              >
                <span>
                  Can we tidy up our booth after being judged?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-14"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-14"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  You can start tidying up the booth when all the
                  teams have finished being judged, so if you have
                  finished judging you can visit the booths of other
                  participants first
                </p>
              </div>
            </div>
          </div>

          {/* Faq 3 */}

          <div
            className="mt-5"
            id="accordion-collapsese"
            data-accordion="collapsese"
          >
            <h1 className="text-center mb-2 font-bold text-4xl">
              After The Event
            </h1>
            <h2 id="accordion-collapse-headingse-15">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-15"
                aria-expanded="true"
                aria-controls="accordion-collapse-bodyse-15"
              >
                <span>When will the winners be announced?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-15"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-15"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Announcement of winners is held on the last day of
                  each event, you can check the date on the schedule
                  listed in the Guide Book.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-16">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-16"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-16"
              >
                <span>Where can we see the winning results?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-16"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-16"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  You can check the final results on the official
                  website of the event you are participating in.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-17">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-17"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-17"
              >
                <span>When will the E-certificate be sent?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-17"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-17"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  IYSA DOES NOT send E-Certificates to National
                  participants or Indonesian Participants who take
                  part in online events. Online National Participants
                  will only receive a certificate in printed/hard form
                  which will later be sent along with the medals via
                  the JNE expedition.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-18">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-18"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-18"
              >
                <span>
                  When is the online delivery of participant
                  certificates?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-18"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-18"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The certificate will be sent no later than one month
                  after the announcement of the winner. You can
                  periodically check the delivery receipt that we sent
                  on the Whatsapp group whether your certificate has
                  been sent or not.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-19">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-19"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-19"
              >
                <span>
                  Where can we get a supervisor certificate?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-19"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-19"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  You can see and download the supervisor certificate
                  on the official website of the event you are
                  participating in.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-14">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-14"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-14"
              >
                <span>How to do medal doubling?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-14"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-14"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  For offline participants, you can immediately
                  duplicate the medals on the spot after the
                  announcement of the winners takes place. And for
                  online participants, you can duplicate the medals
                  via the link we sent on the Whatsapp group, we will
                  send duplicate information on the Whatsapp group no
                  later than 2 days after the announcement of the
                  winner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
