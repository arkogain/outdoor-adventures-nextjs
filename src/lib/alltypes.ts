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
export type contactSchemaType = z.infer<typeof contactSchema>;
