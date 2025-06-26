import { z } from "zod";
import { contactSchema } from "./contactschema";

// event details type
export type eventsDetailstype = {
  id: number;
  image: string;
  title: string;
  discriptions: string;
};

// Schema Type
export type ContactSchemaType = z.infer<typeof contactSchema>;

export type ServiceCardType = {
  id: string;
  image: string;
  headding: string;
  paragraph: string;
};
