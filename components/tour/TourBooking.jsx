'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils";
import TourContentWrap from "./TourContentWrap"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"

const formSchema = z.object({
  fullname: z.string().min(10, {
    message: "Full must be at least 10 characters.",
  }),
  nationality: z.string({
    required_error: "Please select a nationality to display.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  request: z.string().max(200, {
    message: "Request must not be longer than 160 characters.",
  }),
  startDate: z.date().refine((date) => {
    return date > new Date()
  }, {
    message: "Start date must be in the future.",
  }),
  adults: z.number().int().min(0).max(99, {
    message: "Number of adults must be between 0 and 10.",
  }),
  children: z.number().int().min(0).max(99, {
    message: "Number of children must be between 0 and 10.",
  }),
  infant: z.number().int().min(0).max(99, {
    message: "Number of infants must be between 0 and 10.",
  }),
})

const TourBooking = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      nationality: "",
      email: "",
      phoneNumber: "",
      request: "",
      startDate: new Date(),
      adults: 0,
      children: 0,
      infant: 0,
    },
  })

  const handleBookingTour = (values) => {
    console.log({ values })
  }

  return (
    <TourContentWrap title="Booking Tour" id="booking">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleBookingTour)}>
          <h4 className="text-xl font-bold text-secondary mb-4">Contact Information</h4>
          <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4 justify-start mb-5">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['_*'] after:text-red-500">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="vn">Viet Nam</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['_*'] after:text-red-500">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['_*'] after:text-red-500">Phone/Whatsapp/Zalo/...</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <h4 className="text-xl font-bold text-secondary mb-4">Itinerary Information</h4>
          <div className="w-full grid grid-cols-4 gap-x-6 gap-y-4 justify-start mb-5">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['_*'] after:text-red-500">Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "justify-start text-left font-normal w-full", 
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No. Adults (10-99)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No. Children (10-99)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="infant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No. Infant (10-99)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="request"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel>Special request?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your request" className="h-44" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant="orange" className="w-full font-bold text-white" size="lg">BOOKING TOUR</Button>
        </form>
      </Form>
    </TourContentWrap>
  )
}

export default TourBooking