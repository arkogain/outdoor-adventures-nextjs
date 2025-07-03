"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchemaType } from "@/lib/alltypes";
import { contactSchema } from "@/lib/contactschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

const ContactForm = () => {
  const contactForm = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
  });

  const handleContactSubmit = (value: ContactSchemaType) => {
    console.log(value);
  };
  return (
    <>
      <div className="text-xl font-bold md:text-2xl lg:text-4xl">{`We're Ready, Let's Talk.`}</div>
      {/*  */}
      <Form {...contactForm}>
        <form onSubmit={contactForm.handleSubmit(handleContactSubmit)}>
          <FormField
            control={contactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/*  */}
          <FormField
            control={contactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/*  */}
          <FormField
            control={contactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Your Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="text-md cursor-pointer rounded-full bg-rose-500 p-5 text-white hover:bg-rose-600">
            SEND MESSAGE
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
