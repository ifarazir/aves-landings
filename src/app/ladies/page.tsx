"use client";

import HeartRateIcon from "../icons/heart-rate";
import WhatsappIcon from "../icons/whatsapp";
import ChevronLeftCircleIcon from "../icons/chevron-left-circle";
import { Logo } from "../karensa-logo";
import Link from "next/link";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconlyInstagram } from '../icons/Iconly-Instagram-Icon'
import { IconlyWhatsapp } from '../icons/Iconly-Whatsapp-Icon'
import { IconlyTelegram } from '../icons/Iconly-Telegram-Icon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useState } from "react";
import { useRouter } from "next/navigation";

const navigation = [
  { name: 'Lady\'s Day', href: '/ladies' },
  { name: 'Kids Orienteering', href: '/kids' },
  { name: 'کمپ ساحلی جزیره لاوان', href: '/lavan' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#270A65F2] to-[#080533F2]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">آوِس</span>
              <img
                alt=""
                src="./images/logo.png"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
            <Link href="https://wa.me/+989919191810" target='_blank' className='text-green-300'>
              <IconlyWhatsapp size={24} />
            </Link>
            <Link href="https://t.me/aveswatersport" target='_blank' className='text-blue-300'>
              <IconlyTelegram size={24} />
            </Link>
            <Link href="https://www.instagram.com/aveswatersport?igsh=MmdicHNqa3pqbmw4" target='_blank' className='text-pink-400'>
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

      <div className="mt-[110px] w-full md:px-0 px-4">

        <div className="max-w-4xl w-full mx-auto mb-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="w-full">
            <div className="mx-auto w-fit bg-[#FF47ED1A] rounded-[8px] px-3 py-[10px] text-[#FF47ED] flex items-center justify-center gap-1 mb-5">
              <span className="text-[16px] font-medium leading-[20.8px]">
                یک روز به خودت برس
              </span>
              <HeartRateIcon className="w-[24px] h-[24px]" />
            </div>

            <div className="flex flex-col items-center justify-center gap-y-3 mb-10">
              <h1 className="text-white text-[32px] font-black leading-[41.6px]">
                یک روز خاص برای خانم ها
              </h1>
              <p className="text-white/75 text-[16px] leading-[20.8px] font-medium">
                یک روز پر از آرامش و به دور از استرس و خستگی
              </p>
            </div>

            <div className="grow mx-auto flex items-center justify-center gap-x-5 divide-x divide-x-reverse divide-white/15 mb-10">
              <div className="flex flex-col items-center justify-center gap-y-3 pr-5">
                <p className="text-white/75 text-[14px] leading-[18.2px] text-center">
                  لوکیشن
                </p>
                <p className="text-white text-[20px] leading-[26px] text-center font-bold">
                  محمد شهر کرج
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-y-3 pr-5">
                <p className="text-white/75 text-[14px] leading-[18.2px] text-center">
                  برنامه ی یک روزه
                </p>
                <p className="text-white text-[20px] leading-[26px] text-center font-bold">
                  از ساعت ۱۱ صبح تا ۱۹ عصر
                </p>
              </div>

              {/* <div className="flex flex-col items-center justify-center gap-y-3 pr-5">
                <p className="text-white/75 text-[14px] leading-[18.2px] text-center">
                  تاریخ‌ها
                </p>
                <p className="text-white text-[20px] leading-[26px] text-center font-bold">
                  ۲۸ و ۲۹ تیرماه
                </p>
              </div> */}
            </div>
          </div>

          <div className="flex-none">
            <img src="/images/girl-illustration.png" className="w-auto h-64" alt="" />
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-start gap-x-5 gap-y-5">
          <div className="w-full flex flex-col gap-y-5">
            <div className="w-full bg-white/5 p-4 rounded-2xl">
              <p className="mb-2 text-white text-[20px] leading-[26px] font-semibold">پذیرایی:</p>

              <div className="flex flex-wrap divide-x divide-x-reverse divide-white/25">
                <p className="text-white text-[14px] leading-[18.2px] p-[10px]">
                  میز پذیرایی (ولکام)
                </p>
                <p className="text-white text-[14px] leading-[18.2px] p-[10px]">
                  ناهار
                </p>
                <p className="text-white text-[14px] leading-[18.2px] p-[10px]">
                  نوشیدنی های خاص اَوِس
                </p>
                <p className="text-white text-[14px] leading-[18.2px] p-[10px]">
                  میان وعده سبک
                </p>
              </div>
            </div>

            <div className="w-full bg-white/5 p-4 rounded-2xl text-white text-[14px] leading-[18.2px]">
              <p className="p-[10px] mb-2"> انجام یوگا و مدیتیشن توسط مربی حرفه ایی و با سابقه</p>
              <p className="p-[10px] mb-2">طراحی اکتیویتی های هیجان انگیز و سرگرم کننده </p>
              <p className="p-[10px] mb-2">شنا و آبتنی با کلی لوازم بادی آبی مفرح</p>
              <p className="p-[10px] flex flex-wrap items-center justify-start gap-[10px]">
                ماساژ توسط ماسور حرفه ایی و با سابقه  خانم
                <span className="text-[12px] leadign-[15.6px] p-1 rounded bg-white/10">آیتم ماساژ باید از قبل رزرو شود</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-5 mb-10">
            <div className="w-full bg-white/5 p-4 rounded-2xl text-white text-[14px] leading-[24px]">
              <p className="p-[10px]">
                در کل طول روز خانم‌های عزیز میتوانند در محیط دلپذیر معاشرت کنند و از آرامش محیط لذت ببرند و از اکتیویتی‌هایی که برایشان تعبیه شده استفاده کنند
                (مثل جِنگای غول آسا، والیبال بادی، فوتبال بادی و …)
              </p>
            </div>

            <div className="w-full bg-white/5 p-4 rounded-2xl">
              <div className="mb-2 flex flex-col items-start justify-between">
                <p className="p-[10px] text-[14px] text-white leading-[24px]">سرمایه گزاری شما برای این سفر یک روزه</p>

                <div className="w-full flex flex-col items-end gap-y-[10px]">
                  <div className="flex items-center justify-end gap-x-[10px]">
                    <p className="text-white text-[24px] leading-[31.2px] font-black">۲٫۹۰۰٫۰۰۰ تومان</p>
                    <p className="text-white/50 text-[14px] leading-[24px]">بدون ماساژ</p>
                  </div>

                  <div className="flex items-center justify-end gap-x-[10px]">
                    <p className="text-white text-[24px] leading-[31.2px] font-black">۳،۴۰۰٫۰۰۰ تومان </p>
                    <p className="text-white/50 text-[14px] leading-[24px]">با ماساژ (۳۰ دقیقه)</p>
                  </div>
                </div>
              </div>
              <p className="p-[10px] text-[14px] text-white leading-[24px]">ثبت نام به صورت گروهی شامل تخفیف میباشد</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl w-full mx-auto mb-10">
          <p className="text-[14px] text-white leading-[24px] text-center">
            این برنامه در محیطی باغ ویلا که کاملا امن و دیزاین شده مخصوص بانوان است در اطراف تهران برگزار میشود که دارای استخر بزرگ برای شنا و آبتنی میباشد و کلیه وسایل تفریحی کمپ ساحلی از جمله چادر ، مبلمان بادی ، اسکله های بادی تفریحی  ، اسکوتر آبی ، پدل برد در استخر و در این محیط برای استفاده در دسترس است .
          </p>
        </div>

        <div className="max-w-2xl w-full mx-auto mb-10">
          <p className="text-center text-[21px] text-white mb-2 font-bold">
            توجه!!
          </p>
          <p className="text-[18px] text-white leading-[24px] text-center">
            لطفا قبل از ارسال پیام مطالب این صفحه را کامل مطالعه نمایید.
          </p>
        </div>

        <div className="max-w-2xl w-full mx-auto flex flex-col md:flex-row gap-y-5 bg-white/10 p-4 gap-x-5 items-center justify-between rounded-2xl mb-10">
          <p className="text-white text-[16px] leading-[20.8px]">جهت هماهنگی و رزرو به واتس ما پیام دهید:</p>

          <div className="p-2">
            <Link href={"https://wa.me/+989903718447"} className="py-3 px-4 bg-[#0EA64B] rounded-xl flex items-center justify-between gap-x-[10px]">
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

      <div className="max-w-6xl mx-auto w-full mb-14">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            }
          }}
          slidesPerView={2}
          spaceBetween={34}
          loop={true}
          centeredSlides
          centeredSlidesBounds
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full">
              <img src="/images/IMG_6271-min.jpg" className="rounded-lg transition-all w-full object-cover aspect-3/4 duration-300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="/images/IMG_6276-min.jpg" className="rounded-lg transition-all w-full object-cover aspect-3/4 duration-300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="/images/IMG_6279-min.jpg" className="rounded-lg transition-all w-full object-cover aspect-3/4 duration-300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="/images/IMG_6280-min.jpg" className="rounded-lg transition-all w-full object-cover aspect-3/4 duration-300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="/images/IMG_6283-min.jpg" className="rounded-lg transition-all w-full object-cover aspect-3/4 duration-300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img src="/images/IMG_6350-min.jpg" className="rounded-lg transition-all w-full object-cover aspect-3/4 duration-300" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full mx-auto flexx items-center justify-center mb-[60px]">
        <Link href={"https://karensastudio.com"} className="text-xs text-white flex items-center justify-center">
          <span>طراحی و توسعه</span>
          <Logo className={'h-3 mr-1'} invert />
        </Link>
      </div>
    </main>
  );
}
