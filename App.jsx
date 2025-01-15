import CompanyDetails from "./components/CompanyDetails"
import QuickLinks from "./components/QuickLinks"


function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 2xl:px-24 my-2">
      <QuickLinks/>
      <CompanyDetails/>

      <div className="border-b-2 border-[#667384] mt-4"></div>

      <div className="flex justify-between text-[13px] leading-[25px] decoration-skip-ink-none mt-2">
        <div>
          Bluestock Fintech All Rights Reserved.
        </div>
        <div>
          Made with ❤️ in Pune, Maharashtra
        </div>
      </div>
    </div>
  )
}

export default App
