export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-14 px-8 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-white font-bold mb-4">
            ANSI-X Global Tech Academy
          </h3>
          <p className="text-sm">
            Building Global SaaS Developers through real-world projects.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>Full Stack Java</li>
            <li>React Mastery</li>
            <li>Spring Boot</li>
            <li>DevOps</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            Pune, Maharashtra<br />
            support@ansixacademy.com
          </p>
        </div>

      </div>

      <div className="text-center mt-12 text-xs text-gray-600">
        © 2026 ANSI-X Global Tech Academy. All Rights Reserved.
      </div>

    </footer>
  );
}
