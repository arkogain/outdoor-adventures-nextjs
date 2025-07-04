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

export type slidersectiontype = {
  id: number;
  heading: string;
  title: string;
  discriptions: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
};
