import { Fragment } from "react";
import ContactFrom from "../component/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages"></meta>
      </Head>
      <ContactFrom />
    </Fragment>
  );
}

export default ContactPage;
