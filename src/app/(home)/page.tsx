'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { IconlyInstagram } from '../icons/Iconly-Instagram-Icon'
import { IconlyWhatsapp } from '../icons/Iconly-Whatsapp-Icon'
import { IconlyTelegram } from '../icons/Iconly-Telegram-Icon'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { IconlyCall } from '../icons/Iconly-Call-Icon'
import { useRouter } from 'next/navigation'

const navigation = [
    { name: 'Lady\'s Day', href: '/ladies' },
    { name: 'Kids Orienteering', href: '/kids' },
    { name: 'کمپ ساحلی جزیره لاوان', href: '/lavan' },
]

const posts = [
    {
        id: 1,
        title: 'Lady’s day',
        href: '/ladies',
        image: './images/IMG_6276-min.jpg',
        description:
            'حاضری برای یکروز خاص مخصوص خودت سرمایگزاری کنی و تا چندین وقت حالت خوب باشه؟',
        date: 'برنامه یک روزه',
        category: { title: 'ویژه بانوان' },
    },
    {
        id: 2,
        title: 'Kids Orienteering',
        href: '/kids',
        image: './images/kids/IMG_5094.jpg',
        description:
            'مجموعه‌ای از بازی ھا و فعالیت ھا با ھدف نقشه‌خوانی و استفاده از قطب‌نما در محیط طبیعی و روبازِ طراحی شده',
        date: 'برنامه یک روزه',
        category: { title: 'ویژه کودکان' },
    },
    {
        id: 3,
        title: 'کمپ ساحلی جزیره لاوان',
        href: '/lavan',
        image: './images/lavan/IMG_1924.jpg',
        description:
            '۳ شب و ۲  روز کمپ ساحلی و چادرمانی در جزیره لاوان به همراه تمامی وعده‌های غذایی',
        date: '۲ شب و ۳ روز',
    },
]

export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const router = useRouter();

    return (
        <main>
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

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold  text-gray-900 sm:text-6xl">
                                <span className='font-light text-2xl sm:text-4xl'>مجموعه تفریحات آبی</span> آوِس
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                مجموعه آوِس فعالیت خودش رو از سال ۱۴۰۰ شروع و برای اولین بار کمپ تفریحات آبی پرتابل
                                رو در ایران راه اندازی کرد؛ ھدف ما آشنایی با تفریحات آبی از جمله پدل بردینگ
                                کایاک سواری اسنورکلینگ و گجت ھایی مثل اسکوتر دریایی و... بود.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    ورود به سایت
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1">
                                    <IconlyCall size={24} />
                                    تماس با ما
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto w-full lg:mx-0">
                        <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl">درباره آوِس</h2>
                        <p className="mt-2 text-base leading-10 text-gray-600">
                            مجموعه آوِس فعالیت خودش رو از سال ۱۴۰۰ شروع و برای اولین بار کمپ تفریحات آبی پرتابل
                            رو در ایران راه اندازی کرد ، ھدف ما آشنایی
                            با تفریحات آبی از جمله پدل بردینگ،
                            کایاک سواری، اسنورکلینگ و گجت ھایی مثل اسکوتر دریایی و... بود؛
                            در این مدت کوتاه تونستیم با پکیج‌ھای متفاوت وخاص
                            مانند کمپ ساحلی جزیره لاوان با تفریحات کامل آبی ،
                            روز مخصوص خانم ھا
                            . و کمپ مخصوص کودکان سبک جدید از برگزاری کمپ و ایونت ھا تفریحی ورزشی و آموزشی رو ارائه بدیم
                            ھمچنین ما در حوزه تولید محتوا و ھمکاری با شرکت ھای بزرگ برای معرفی محصولاتشون ھمکاری داریم و در این حوزه خدمات نوینی رو برای برندھا و محصولات فراھم میکنیم.
                            آوِس در حال حاضر در حوزه فروش محصولات دریایی نیز فعالیت خودشو شروع کرده و تفاوتی که در این حوزه ھدف گذاری شده از خرید تا استفاده از محصول ما در کنارتون ھستیم و شما میتونین بعد از خرید از ما در کمپ ھای دریایی ما آموزش ببنید و و از خریدتون لذت ببیرین
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between cursor-pointer" onClick={() => router.push(post.href)}>
                                <img src={post.image} alt={post.title} className="object-cover aspect-square rounded-2xl mb-5" />
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time className="text-gray-500">
                                        {post.date}
                                    </time>
                                    {
                                        post.category &&
                                        <span
                                            className="relative z-10 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600"
                                        >
                                            {post.category.title}
                                        </span>
                                    }
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <Link className='mt-5' href={post.href}>
                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 flex items-center justify-center gap-2 hover:bg-orange-100 hover:ring-orange-500/20 hover:text-orange-600 transition-all">
                                        اطلاعات بیشتر

                                        <ChevronLeftIcon className='w-4 h-4' />
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    )
}
