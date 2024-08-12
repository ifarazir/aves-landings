"use client";

import WhatsappIcon from "../icons/whatsapp";
import ChevronLeftCircleIcon from "../icons/chevron-left-circle";
import { Logo } from "../karensa-logo";
import Link from "next/link";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconlyInstagram } from '../icons/Iconly-Instagram-Icon'
import { IconlyWhatsapp } from '../icons/Iconly-Whatsapp-Icon'
import { IconlyTelegram } from '../icons/Iconly-Telegram-Icon'
import { CheckIcon } from '@heroicons/react/20/solid'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { IconlyLocation } from "../icons/Iconly-Location-Icon";
import { Iconlycamp2 } from "../icons/Iconly-camp-2-Icon";
import { Iconlyexplore1 } from "../icons/Iconly-explore-1-Icon";
import { IconlyPaintingpalette } from "../icons/Iconly-Painting-palette-Icon";
import { IconlyCake } from "../icons/Iconly-Cake-Icon";
import { IconlyColdDrink } from "../icons/Iconly-Cold-Drink-Icon";
import { IconlyApple } from "../icons/Iconly-Apple-Icon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconlyBurger } from "../icons/Iconly-Burger-Icon";
import { IconlyMeat } from "../icons/Iconly-Meat-Icon";
import { IconlyPizza } from "../icons/Iconly-Pizza-Icon";
import { IconlySoap } from "../icons/Iconly-Soap-Icon";
import clsx from "clsx";
import { IconlySlippers2 } from "../icons/Iconly-Slippers-2-Icon";
import { Iconlyboat2 } from "../icons/Iconly-boat-2-Icon";
import { IconlyCameravideo } from "../icons/Iconly-Camera-video-Icon";
import { IconlyCablecontroller } from "../icons/Iconly-Cable-controller-Icon";
import { IconlyShower } from "../icons/Iconly-Shower-Icon";
import { IconlyToilet2 } from "../icons/Iconly-Toilet-2-Icon";
import { IconlyPoweradapterchargeoutput } from "../icons/Iconly-Power-adapter-charge-output-Icon";
import { IconlySofa2 } from "../icons/Iconly-Sofa-2-Icon";
import { Iconlyballvolleyball } from "../icons/Iconly-ball-volleyball-Icon";
import { IconlyballBasketball } from "../icons/Iconly-ball-Basketball-Icon";
import { IconlyballFootball1 } from "../icons/Iconly-ball-Football-1-Icon";
import { IconlyShip } from "../icons/Iconly-ship-Icon";

const navigation = [
  { name: 'Lady\'s Day', href: '/ladies' },
  { name: 'Kids Orienteering', href: '/kids' },
  { name: 'کمپ ساحلی جزیره لاوان', href: '/lavan' },
]

const features = [
  {
    name: '۲ وعده صبحانه',
    icon: IconlyBurger,
  },
  {
    name: '۲ وعده ناهار',
    icon: IconlyMeat,
  },
  {
    name: '۲ وعده شام',
    icon: IconlyPizza,
  },
  {
    name: '۲ میز عصرانه',
    icon: IconlySoap,
  },
]

const featuresEntertainments = [
  {
    name: 'پدل بورد',
    icon: IconlySlippers2,
  },
  {
    name: 'کایاک دو نفره',
    icon: Iconlyboat2,
  },
  {
    name: 'اسنورکلینگ',
    icon: IconlySlippers2,
  },
  {
    name: 'اسکله درایی',
    icon: IconlySlippers2,
  },
  {
    name: <>اسکوتر دریایی <span className="text-xs text-gray-500 block mt-1 font-normal">از قبل باید رزرو شود</span></>,
    icon: IconlySlippers2,
  },
  {
    name: 'سینما در ساحل',
    icon: IconlyCameravideo,
  },
  {
    name: 'پلی‌استیشن',
    icon: IconlyCablecontroller,
  },
  {
    name: 'چادر دوش',
    icon: IconlyShower,
  },
  {
    name: <>چادر دستشویی <span className="text-xs text-gray-500 block mt-1 font-normal">به همراه شستشویی برقی و لوازم بهداشتی</span></>,
    icon: IconlyToilet2,
  },
  {
    name: 'تامین برق کمپ در طول روز',
    icon: IconlyPoweradapterchargeoutput,
  },
  {
    name: 'مبلمان بادی و دیزاین ساحل',
    icon: IconlySofa2,
  },
  {
    name: 'والیبال ساحلی',
    icon: Iconlyballvolleyball,
  },
  {
    name: 'واتر پلو',
    icon: IconlyballBasketball,
  },
  {
    name: 'فوتبال ساحلی',
    icon: IconlyballFootball1,
  },
  {
    name: 'لوازم بادی برای بازی ساحلی',
    icon: IconlySlippers2,
  },
  {
    name: 'ترنسفر های دریایی',
    icon: IconlyShip,
  },
]

const tiers = [
  {
    name: 'چادر VIP',
    id: 'tour-vip',
    priceMonthly: '۳،۲۰۰،۰۰۰',
    features: [
      'شامل چادر سرخپوستی سقف بلند',
      'تشک بادی',
      'بالشت بادی',
      'کیسه خواب',
      'و دیزاین شده',
    ],
    featured: true,
  },
  {
    name: 'چادر معمولی',
    id: 'tour-normal',
    priceMonthly: '۱،۳۰۰،۰۰۰',
    features: ['زیر انداز کیسه خواب', 'کیسه خواب', 'چادر کمپی',],
    featured: false,
  },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const router = useRouter();

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">آوِس</span>
              <img
                alt=""
                src="./images/logo.png"
                className="h-10 w-auto invert"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
            <Link href="https://wa.me/+989919191810" target='_blank' className='text-green-600'>
              <IconlyWhatsapp size={24} />
            </Link>
            <Link href="https://t.me/aveswatersport" target='_blank' className='text-blue-500'>
              <IconlyTelegram size={24} />
            </Link>
            <Link href="https://www.instagram.com/aveswatersport?igsh=MmdicHNqa3pqbmw4" target='_blank' className='text-pink-500'>
              <IconlyInstagram size={24} />
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">آوِس</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex items-center justify-start gap-10">
                  <Link href="https://wa.me/+989919191810" target='_blank' className='text-green-600'>
                    <IconlyWhatsapp size={36} />
                  </Link>
                  <Link href="https://t.me/aveswatersport" target='_blank' className='text-blue-500'>
                    <IconlyTelegram size={36} />
                  </Link>
                  <Link href="https://www.instagram.com/aveswatersport?igsh=MmdicHNqa3pqbmw4" target='_blank' className='text-pink-500'>
                    <IconlyInstagram size={36} />
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -mr-24 transform-gpu overflow-hidden blur-3xl lg:mr-24 xl:mr-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-orange-500 to-orange-700/60 opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">

                  <h1 className="text-4xl font-bold  text-gray-900 sm:text-6xl">
                    کمپ ساحلی جزیره لاوان
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    ۳ شب و دو روز کمپ ساحلی و چادرمانی در جزیره لاوان به همراه تمامی وعده‌های غذایی
                  </p>

                  <Link href={"https://wa.me/+989903718447"} className="mt-10 w-fit py-3 px-4 bg-[#0EA64B] rounded-xl flex items-center justify-between gap-x-[10px]">
                    <WhatsappIcon className="w-[32px] h-[32px]" />
                    <div className="flex flex-col justify-center items-start gap-y-1">
                      <p className="text-[16px] leading-[20.8px] text-white font-black" dir="ltr">۰۹۹۰ ۳۷۱ ۸۴۴۷</p>
                      <p className="text-[12px] leading-[15.6px] text-white">انتقال به واتس اپ | کلیک کنید</p>
                    </div>
                    <ChevronLeftCircleIcon className="w-[24px] h-[24px]" />
                  </Link>

                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pr-20 lg:mt-0 lg:pl-0">
                  <div className="mr-auto w-44 flex-none space-y-8 pt-32 sm:mr-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="./images/lavan/IMG_1924.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="ml-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="./images/lavan/IMG_1925.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="./images/lavan/IMG_1973.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="./images/lavan/IMG_1978.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="./images/lavan/IMG_1981.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white py-10 sm:py-18">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-orange-600">ویژگی‌های تور</h2>
                  <p className="mt-2 text-3xl font-bold  text-gray-900 sm:text-4xl">همه وعده‌های غذایی با ما!</p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pr-10">
                        <dt className="inline text-lg font-semibold text-gray-900">
                          <feature.icon aria-hidden="true" className="absolute right-1 h-7 w-7 text-orange-600" />
                          {feature.name}
                        </dt>{' '}
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="sm:px-6 lg:px-0">
                <div className="relative isolate overflow-hidden bg-orange-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pr-16 sm:pl-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-y-px -right-3 -z-10 w-full origin-bottom-right skew-x-[-30deg] bg-orange-100 opacity-20 ring-1 ring-inset ring-white"
                  />
                  <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                    <img
                      alt="Product screenshot"
                      src="./images/lavan/IMG_1964.jpg"
                      className="-mb-12 w-full aspect-square object-cover max-w-none rounded-tr-xl bg-gray-800 ring-1 ring-white/10"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">یک روز به یاد ماندنی</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              دنیای تفریحات دریایی و ساحلی
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {featuresEntertainments.map((feature, index) => (
                <div key={index} className="flex flex-col items-center justify-start">
                  <dt className="text-xl font-semibold leading-7 text-gray-900 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-600">
                      <feature.icon aria-hidden="true" className="h-8 w-8 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>

          </div>
        </div>


        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <p className="text-base leading-7 text-gray-600">
                این کمپ ورزشی-تفریحی دو نوع چادر داره: چادر VIP و چادر معمولی. چادر VIP که ۳,۲۰۰,۰۰۰ تومنه، یه چادر سرخپوستی سقف بلند همراه با تشک و بالشت بادی و کیسه خوابه. چادر معمولی هم که ۱,۳۰۰,۰۰۰ تومنه، یه چادر کمپینی با زیرانداز و کیسه خواب داره.
              </p>

              <p className="mt-3 text-base leading-7 text-gray-600">
                بلیط هواپیما به عسلویه، بندر لنگه یا لامرد به عهده خودتون هست، ولی اگه بخواین، ما می‌تونیم بلیط رو براتون بگیریم. دیدارمون توی بندر مقامه و ترنسفر از فرودگاه به بندر مقام هم با خودتونه. البته اگه بخواین، می‌تونیم ترنسفر اختصاصی با هزینه ۵۵۰,۰۰۰ تومن برای هر نفر براتون جور کنیم. لطفاً موقع ثبت‌نام بگید اگه نیاز به ترنسفر یا بلیط هواپیما دارید. یادتون باشه که ما مسئولیتی در قبال کنسلی یا تأخیر پروازها نداریم، حتی اگه بلیط رو ما براتون گرفته باشیم.
              </p>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-4">
                  <p className="text-base font-semibold text-gray-600">سرمایه گذاری شما برای این سفر</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold  text-gray-900">۱۳،۸۰۰،۰۰۰</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">تومان</span>
                  </p>
                  <p className="mt-4 text-sm text-gray-600">برای یک نفر (بدون احتساب هزینه چادر)</p>

                  <Link href={"https://wa.me/+989903718447"} className="mt-10 w-fit py-3 px-4 bg-[#0EA64B] rounded-xl flex items-center justify-between gap-x-[10px]">
                    <WhatsappIcon className="w-[32px] h-[32px]" />
                    <div className="flex flex-col justify-center items-start gap-y-1">
                      <p className="text-[16px] leading-[20.8px] text-white font-black" dir="ltr">۰۹۹۰ ۳۷۱ ۸۴۴۷</p>
                      <p className="text-[12px] leading-[15.6px] text-white">انتقال به واتس اپ | کلیک کنید</p>
                    </div>
                    <ChevronLeftCircleIcon className="w-[24px] h-[24px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <div className="w-full mx-auto flex items-center justify-center mt-[60px] mb-[60px]">
        <Link href={"https://karensastudio.com"} className="text-xs text-black flex items-center justify-center">
          <span>طراحی و توسعه</span>
          <Logo className={'h-3 mr-1'} />
        </Link>
      </div>
      
    </div>
  )
}

