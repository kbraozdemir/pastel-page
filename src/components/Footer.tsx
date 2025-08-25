// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© Kübra Özdemir {new Date().getFullYear()} – Tüm hakları saklıdır.</p>

        <a
            href="mailto:kubra@example.com"
            className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition"
        >
            İletişime Geç
        </a>
    </div>
    </footer>
  );
}
