export const card: Readonly<{ name: string; company: string; email: string; phone: string; website: string }>;
export const vcard: string;
import type { CreateEmailOptions, CreateEmailRequestOptions, CreateEmailResponse } from 'resend';
export function handleContactCard(req: Request, options: { apiKey?: string; send: (payload: CreateEmailOptions, options: CreateEmailRequestOptions) => Promise<CreateEmailResponse>; now?: number; previewHost?: string; development?: boolean }): Promise<Response>;
