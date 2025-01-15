function QuickLinks(){
    const resources = ['Trading View', 'NSE Holidays', 'e-Voting CDSL', 'e-Voting NSDL', 'Market Timings'];
    const company = ['Careers', 'Contact US', 'About US', 'Community', 'Blogs'];
    const offerings = ['Compare Broker', 'Fin Calculators', 'IPO', 'All Brokers', 'Products'];
    const links = ['Shark Investor', 'Mutual Funds', 'Sitemap', 'Indian Indices', 'Bug Bounty Program'];
    const policy = ['Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'Disclaimer', 'Trust & Security'];
    return <div className="font-poppins mb-24 ml-3">
        <div className="grid grid-cols-5 space-x-5">
            <div>
                <h3 className="text-sm font-semibold leading-[25px] tracking-[0.06em] text-left decoration-skip-ink-none mb-6 mb-6">Resources</h3>
                {
                    resources.map((resource) => (
                        <div className="grid grid-cols-1 text-[13px] font-normal leading-[25px] tracking-[0.06em] text-left underline-offset-[from-font] decoration-skip-ink-none text-[#667384] my-2 my-2">
                            {resource}
                        </div>
                ))}
            </div>
            <div>
                <h3 className="text-sm font-semibold leading-[25px] tracking-[0.06em] text-left decoration-skip-ink-none mb-6">Company</h3>
                {
                    company.map((comp) => (
                        <div className="grid grid-cols-1 text-[13px] font-normal leading-[25px] tracking-[0.06em] text-left underline-offset-[from-font] decoration-skip-ink-none text-[#667384] my-2">
                            {comp}
                        </div>
                ))}
            </div>
            <div>
                <h3 className="text-sm font-semibold leading-[25px] tracking-[0.06em] text-left decoration-skip-ink-none mb-6">Offerings</h3>
                {
                    offerings.map((offering) => (
                        <div className="grid grid-cols-1 text-[13px] font-normal leading-[25px] tracking-[0.06em] text-left underline-offset-[from-font] decoration-skip-ink-none text-[#667384] my-2">
                            {offering}
                        </div>
                ))}
            </div>
            <div>
                <h3 className="text-sm font-semibold leading-[25px] tracking-[0.06em] text-left decoration-skip-ink-none mb-6">Links</h3>
                {
                    links.map((link) => (
                        <div className="grid grid-cols-1 text-[13px] font-normal leading-[25px] tracking-[0.06em] text-left underline-offset-[from-font] decoration-skip-ink-none text-[#667384] my-2">
                            {link}
                        </div>
                ))}
            </div>
            <div>
                <h3 className="text-sm font-semibold leading-[25px] tracking-[0.06em] text-left decoration-skip-ink-none mb-6">Policy</h3>
                {
                    policy.map((pol) => (
                        <div className="grid grid-cols-1 text-[13px] font-normal leading-[25px] tracking-[0.06em] text-left underline-offset-[from-font] decoration-skip-ink-none text-[#667384] my-2">
                            {pol}
                        </div>
                ))}
            </div>
        </div>
    </div>
}

export default QuickLinks