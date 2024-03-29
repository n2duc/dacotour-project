import Link from "next/link";
import Image from "next/image"
import { FOOTER_CONTACT_INFO, FOOTER_CONTENTS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-primary w-full pt-16">
        <div className="max-container flex w-full flex-col">
          <div className="flex items-start justify-between gap-8 mb-16">
            {FOOTER_CONTENTS.map((content) => (
              <FooterColumn key={content.title} title={content.title}>
                <ul className="flex flex-col text-base font-normal gap-3">
                  {content.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="flex flex-col text-base font-normal gap-3">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label}>
                    {link.label}: {link.value}
                  </li>
                ))}
              </ul>
            </FooterColumn>
            <div className="flex flex-col items-start w-1/4 gap-3">
              <Image src="/logo-dacotours.png" alt="logo" width={220} height={50} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi tempore quibusdam?</p>
            </div>
          </div>
          <div className="mx-auto">
            <Image src="/payment.png" alt="payments" width={420} height={34} />
          </div>
          <p className="mt-6 py-4 w-full text-center text-sm font-semibold rounded-t-full text-black bg-white">Copyright © 2024 by <Link className="hover:underline" href="https://dacotours.com/">DACOTOURS</Link>.</p>
        </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-8 text-black w-1/4">
      <h4 className="text-xl font-bold uppercase">{title}</h4>
      {children}
    </div>
  )
}

export default Footer