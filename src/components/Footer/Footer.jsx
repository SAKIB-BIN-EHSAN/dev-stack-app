import logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <>
          <div className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-3 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-10">
                {/* Brand */}
                <div className="col-span-3 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-left">
                  <a href="#" className="mb-4 flex items-center gap-2">
                    <img src={logo} alt="Dev Stack" className="h-9" />
                  </a>
                  <p className="mb-5 max-w-xs text-sm leading-relaxed text-gray-500">
                    Curated tools, technologies, and resources for developers building modern software.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-sm font-bold text-gray-600 transition-colors hover:text-gray-900">GitHub</a>
                    <a href="#" className="text-sm font-bold text-gray-600 transition-colors hover:text-gray-900">Twitter</a>
                    <a href="#" className="text-sm font-bold text-gray-600 transition-colors hover:text-gray-900">LinkedIn</a>
                  </div>
                </div>
                {/* Product */}
                <div className="hidden col-span-1 md:block">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">Product</h4>
                  <ul className="space-y-2.5">
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Home</a></li>
                    <li><a href="#technologies" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Technologies</a></li>
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Projects</a></li>
                  </ul>
                </div>
                {/* Company */}
                <div className="hidden col-span-1 md:block">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">Company</h4>
                  <ul className="space-y-2.5">
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">About</a></li>
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Contact</a></li>
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Careers</a></li>
                  </ul>
                </div>
                {/* Legal */}
                <div className="hidden col-span-1 md:block">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">Legal</h4>
                  <ul className="space-y-2.5">
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Privacy Policy</a></li>
                    <li><a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex items-center gap-5">
                  <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Privacy</a>
                  <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default Footer;