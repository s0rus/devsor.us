import { ContactSchema } from "./contact-schema";

export function ContactTemplate({ email, message }: ContactSchema) {
  return (
    <div>
      <h1>message from {email}</h1>
      <p>{message}</p>
    </div>
  );
}
