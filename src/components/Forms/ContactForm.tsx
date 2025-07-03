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
import LinkBtn from "../LinkBtn";

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
      <section className="space-y-10">
        <div className="text-2xl font-bold lg:text-4xl">{`We're Ready, Let's Talk.`}</div>
        {/*  */}
        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(handleContactSubmit)}
            className="space-y-6">
            <FormField
              control={contactForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="rounded-sm border-dotted border-black/50 px-3 py-6 !text-lg focus:border-black focus:shadow-none focus-visible:border-black focus-visible:ring-0"
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
                      placeholder="Email Address"
                      {...field}
                      className="rounded-sm border-dotted border-black/50 px-3 py-6 !text-lg focus:border-black focus:shadow-none focus-visible:border-black focus-visible:ring-0"
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
                      className="h-28 rounded-sm border-dotted border-black/50 px-3 !text-lg focus:border-black focus:shadow-none focus-visible:border-black focus-visible:ring-0"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <LinkBtn className="text-background px-10 py-3">
              SEND MESSAGE
            </LinkBtn>
          </form>
        </Form>
      </section>
    </>
  );
};

export default ContactForm;
