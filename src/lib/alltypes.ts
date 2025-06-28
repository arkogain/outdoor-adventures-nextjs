import { z } from "zod";
import { contactSchema } from "./contactschema";

// Schema Type
export type ContactSchemaType = z.infer<typeof contactSchema>;

export type ServiceCardType = {
  id: string;
  image: string;
  alt: string;
  heading: string;
  paragraph: string;
};

export type ServicePageTextsType = {
  text: string;
};
