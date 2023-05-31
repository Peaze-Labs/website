import Image from "next/image";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import UserExperience from "../assets/user-experience.webp";
import ExperienceBackground from "../assets/pattern1.svg";
import IntegrationBackground from "../assets/pattern2.svg";
import LogoRatio from "../assets/ratio.svg";
import LogoPlaid from "../assets/plaid.png";
import LogoWormhole from "../assets/wormhole.png";
import Logo1inch from "../assets/1inch.svg";
import Logo0x from "../assets/0x.png";
import { Header } from "@/components/Header";
import { CodeBlock } from "@/components/CodeBlock";

const manrope = Manrope({ subsets: ["latin"] });

const codeBlock1 = `import { PeazeProvider } from ‘@peaze-labs/sdk-react’;

const App = () => (
  <PeazeProvider>
       <WagmiConfig config={config}></WagmiConfig>
  </PeazeProvider>
);

export default App;`;

const codeBlock2 = `npm install @peaze-labs/sdk-react`;

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between md:py-20 p-8 max-w-screen-xl mx-auto ${manrope.className} text-xs md:text-base`}
    >
      <Header />
      <section className="w-full md:mt-[118px] mt-[52px]">
        <div className="flex flex-col md:w-1/2 space-y-[40px]">
          <h1 className="text-2xl font-bold md:text-6xl">
            Web3
            <br />
            transactions
            <br />
            simplified
            <br />
          </h1>
          <p className="">
            Peaze automates complexities so your users can fund on-chain
            transactions in one click.
          </p>
          <div className="flex flex-row space-x-4">
            <a
              href="#"
              className="md:px-8 md:py-4 px-[26px] py-[10px] text-white rounded-lg bg-accent hover:bg-raised"
            >
              Get started
            </a>
            <a
              href="#"
              className="md:px-8 md:py-4 px-[26px] py-[10px] bg-transparent border rounded-lg border-primary hover:text-accent hover:border-accent"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="flex md:flex-row flex-col md:pt-[150px] pt-[50px] md:space-x-6 md:space-y-0 space-x-0 space-y-6">
        <div className="flex flex-col flex-1 space-y-6">
          <h3 className="font-semibold text-muted">Why Peaze?</h3>
          <h2 className="text-base font-bold md:text-lg">
            Seamless user experience
          </h2>
          <p className="text-secondary">
            Our simple front-end module streamlines your transaction experience
            to get more users across the finish line.
          </p>
          <a className="font-semibold hover:text-accent" href="#">
            Learn more &gt;
          </a>
        </div>
        <div className="relative flex-1">
          <Image src={ExperienceBackground} width={515} alt="background" />
          <div className="absolute md:top-[56px] top-[20px] md:left-[18%] md:w-auto w-full">
            <Image
              src={UserExperience}
              alt="User experience showcase"
              width={391}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-20 space-x-0 space-y-6 md:space-x-6 md:space-y-0 md:flex-row-reverse">
        <div className="flex flex-col space-y-6 basis-2/5 pt-[90px]">
          <h2 className="text-base font-bold md:text-lg">
            Frictionless integration
          </h2>
          <p className="text-secondary">
            The Peaze SDK works alongside your app’s existing integrations like
            wagmi, RainbowKit, and Dynamic with just 3 lines of code.
          </p>
          <a className="font-semibold hover:text-accent" href="#">
            Learn more &gt;
          </a>
        </div>
        <div className="relative flex-1">
          <Image src={IntegrationBackground} width={600} alt="background" />
          <div className="absolute md:top-[78px] top-[0px] md:left-[-20px] w-full max-w-[600px]">
            <CodeBlock code={codeBlock2} />
            <CodeBlock code={codeBlock1} />
          </div>
        </div>
      </section>

      <div className="w-full pt-8 md:pt-2">
        <h3 className="mt-8 font-semibold text-left md:mt-2">
          What Peaze enables
        </h3>
      </div>
      <section className="flex flex-col space-x-0 space-y-6 md:space-x-6 md:space-y-0 md:flex-row pt-9">
        <div className="md:px-9 px-6 md:pt-[56px] md:pb-[80px] pt-[20px] pb-[50px] rounded-xl feature-box text-white1">
          <h2 className="mb-8 text-base font-bold md:text-lg">
            Fiat powered transactions
          </h2>
          <p className="mb-8 font-light">
            Automated on-ramping so users can transact without manually buying
            crypto and managing balances.
          </p>
          <a className="font-semibold hover:text-primary" href="#">
            Learn more &gt;
          </a>

          <p className="md:mt-[85px] mt-8 mb-3 text-primary font-semibold md:text-base text-[15px]">
            Powered by
          </p>
          <div className="flex flex-wrap items-center space-x-2">
            <Image
              src={LogoRatio}
              alt="Ratio"
              width={157}
              className="ml-[-20px]"
            />
            <Image src={LogoPlaid} alt="Plaid" width={118} />
          </div>
        </div>
        <div className="md:px-9 px-6 md:pt-[56px] md:pb-[80px] pt-[20px] pb-[50px] rounded-xl feature-box text-white1">
          <h2 className="mb-8 text-base font-bold md:text-lg">
            Crypto powered transactions
          </h2>
          <p className="mb-8 font-light">
            Automated bridging and swapping allows users to transact on any
            chain with any token in one click.
          </p>
          <a className="font-semibold hover:text-primary" href="#">
            Learn more &gt;
          </a>

          <p className="md:mt-[85px] mt-8 mb-3 text-primary font-semibold md:text-base text-[15px]">
            Powered by
          </p>
          <div className="flex flex-wrap items-center space-x-4">
            <Image
              src={LogoWormhole}
              alt="Wormholde"
              width={187}
              className="ml-[-11px]"
            />
            <Image src={Logo1inch} alt="1inch" width={149} />
            <Image src={Logo0x} alt="0x" width={91} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
