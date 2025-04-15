import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 font-sans bg-gray-100">
      <div className="grid grid-rows-3 gap-6 w-full max-w-lg lg:max-w-xl">
        {/* Profile Section */}
        <section className="grid grid-cols-3 gap-4 rounded-2xl bg-white p-4 shadow-lg">
          <Image
            src="/profile-picture.png"
            width={150}
            height={150}
            alt="Picture of Daniel Feldman"
            className="rounded-xl"
            priority
            sizes="(max-width: 768px) 80px, 100px"
          />
          <div className="flex flex-col justify-center col-span-2">
            <p className="text-sm text-gray-600">Hello, I&apos;m</p>
            <h1 className="text-2xl font-bold text-cyan-400">Daniel Feldman</h1>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full">
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl p-4 bg-white shadow-lg">
            <div className="text-gray-500">
              <h1>Project #1</h1>
              <p>Lorem ipsum text</p>
              <Image
                src="/profile-picture.png"
                width={150}
                height={150}
                alt="Picture of Daniel Feldman"
                className="rounded-xl"
                priority
                sizes="(max-width: 768px) 80px, 100px"
              />
              <hr></hr>
            </div>
            <div>Project #2</div>
            <div>Project #3</div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl p-4 bg-white shadow-lg">
            <a
              href="mailto:daniel.feldman.contact@gmail.com"
              className="text-center hover:text-cyan-400"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/dany-feldman"
              className="text-center hover:text-cyan-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="text-center hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
