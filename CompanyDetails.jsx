import xLogo from '../assets/xLogo.svg';
import fbLogo from '../assets/fbLogo.svg';
import ytLogo from '../assets/youtubeLogo.svg';
import linkedInLogo from '../assets/linkedInLogo.svg';
import instaLogo from '../assets/instagramLogo.svg';
import telegramLogo from '../assets/telegramLogo.svg';
import companylogo from '../assets/companyLogo.svg';
import startupLogo from '../assets/startupIndiaLogo.svg';

function CompanyDetails(){
    return <div className="font-poppins text-[#667384] flex my-4">
    <div className="mr-4">
      <div className="flex items-center gap-3 mb-6">
        <img src={xLogo} alt="x-Logo" className="h-6" />
        <img src={fbLogo} alt="fb-Logo" className="h-6" />
        <img src={ytLogo} alt="youtube-Logo" className="h-6 ml-1" />
        <img src={linkedInLogo} alt="linkedIn-Logo" className="h-6" />
        <img src={instaLogo} alt="insta-Logo" className="h-6" />
        <img src={telegramLogo} alt="telegram-Logo" className="h-6" />
      </div>
      
      <div className="mb-4">
        <img src={companylogo} alt="company-Logo" className="w-full" />
      </div>
      
      <div className="mb-4 text-[13px] font-normal leading-[25px] text-left underline-offset-[from-font] decoration-skip-ink-none">
        <div className="">Bluestock Fintech</div>
        <div>Pune, Maharashtra</div>
      </div>
      
      <div className="mb-4 text-[13px] font-normal leading-[25px] text-left underline-offset-[from-font] decoration-skip-ink-none">
        <div>MSME Registration No:</div>
        <div>UDYAM-MH-01-0138001</div>
      </div>
      
      <div>
        <img src={startupLogo} alt="startup-Logo" className="w-full" />
      </div>
    </div>
    
    <div className="ml-24 flex-1 flex flex-col gap-4 text-[13px] font-normal leading-[25px] text-left underline-offset-[from-font] decoration-skip-ink-none">
      <p>
        Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.
      </p>
      
      <p>
        The users can write to <span className="text-blue-500">hello@bluestock.in</span> for any app, website related queries. Also you can send IT / Tech related feedback to <span className="text-blue-500">cto@bluestock.in</span>
      </p>
      
      <p>
        Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only.
      </p>
      
      <p>
        Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subject to market risks.
      </p>
    </div>
  </div>
}

export default CompanyDetails;