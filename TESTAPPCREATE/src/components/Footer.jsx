export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold text-white mb-2">ABOUT</h4>
          <ul className="space-y-1 text-sm">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">HELP</h4>
          <ul className="space-y-1 text-sm">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">POLICY</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">SOCIAL</h4>
          <ul className="space-y-1 text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-6">
        © 2024 ShopKart. All rights reserved.
      </p>
    </footer>
  )
}
