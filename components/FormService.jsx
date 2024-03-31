'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import sendMailService from "@/lib/tours/sendMailService"

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
})

const FormService = ({ serviceId }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
  })

  const handleSendEmail = async (values) => {
    await sendMailService({ serviceId, ...values })
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSendEmail)} className="max-w-[540px] my-10 mx-auto flex flex-col gap-4 bg-gray-50 p-6 rounded-md border border-gray-200">
        <FormField
          control={form.control}
          name="email"
          render={({ field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field}) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your phoneNumber" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </Form>
  )
}

export default FormService