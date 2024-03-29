"use client";

import { Sansita_Swashed } from "next/font/google";
const sansita = Sansita_Swashed({ subsets: ["latin"] });

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import Image from "next/image";
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullname: z.string().min(10, {
    message: "Full must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  })

  const handleSubmitForm = (values) => {
    console.log({ values });
  }

  return (
    <section className="w-full bg-white py-24" id="contact">
      <div className="max-container w-full">
        <div className="flex w-full items-center bg-[#D9E8D5] border-4 border-white rounded-md overflow-hidden shadow-md">
          <div className="h-[560px] w-[560px] relative">
            <div className="absolute bottom-6 left-6 text-white z-50 max-w-[300px]">
              <p className={cn("text-[32px] font-bold", sansita.className)}>Dacotours</p>
              <p className="text-sm font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, maxime harum? Vero repellat odio numquam!</p>
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              allowTouchMove={false}
              effect="fade"
              loop={true}
              centeredSlides={true}
              speed={2000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySwiper h-[560px] w-[560px] relative"
            >
              <SwiperSlide>
                <Image src="/image-resort.png" alt="contact" layout="fill" objectFit="cover" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/card-forest.png" alt="contact" layout="fill" objectFit="cover" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/image-resort.png" alt="contact" layout="fill" objectFit="cover" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/card-forest.png" alt="contact" layout="fill" objectFit="cover" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-10 flex-1">
            <h2 className="text-4xl font-semibold text-black">Contact Us</h2>
            <p className="mb-5">24/7 We will answer your questions and problems</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-3">
                <FormField 
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fullname</FormLabel>
                      <FormControl>
                        <Input placeholder="Erik ten Hag" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="abc123@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="I wanna a girlfriend but..." className="h-32 max-h-32 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-secondary">Send</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact