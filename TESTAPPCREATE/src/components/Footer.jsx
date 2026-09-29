export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">HELP</h4>
          <ul className="space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">POLICY</h4>
          <ul className="space-y-2">
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">SOCIAL</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 border-t border-slate-700 text-xs">
        © 2024 ShopKart. All rights reserved.
      </div>
    </footer>
  );
}
