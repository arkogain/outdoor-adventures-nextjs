import { z } from "zod";
import { contactSchema } from "./contactschema";

// Schema Type
export type contactSchemaType = z.infer<typeof contactSchema>;
