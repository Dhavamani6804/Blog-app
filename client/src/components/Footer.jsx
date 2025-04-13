import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-lg text-white">
                Dhava's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="astonishing-mousse-bc246d.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </FooterLink>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dhava's blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Catch me up" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/Dhavamani6804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink
                  href="https://www.linkedin.com/in/dhavamani-s-163916257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Dhava's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon
              href="https://github.com/Dhavamani6804"
              icon={BsGithub}
            />
            <FooterIcon
              href="https://www.linkedin.com/in/dhavamani-s-163916257/"
              icon={BsLinkedin}
            />
            <FooterIcon
              href="https://www.instagram.com/_dhavamani6804_/profilecard/?igsh=cjRlcDZrcWN5eHNk"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
