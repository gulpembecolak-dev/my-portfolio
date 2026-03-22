export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Gülpembe Çolak - Portfolio</h1>
      </div>

      <div className="relative flex place-items-center mb-12">
        <p className="text-xl text-center max-w-2xl">
          Merhaba! Ben Gülpembe. Bu site, User Research (Kullanıcı Araştırması) ödevim için 
          Next.js ve Google Analytics kullanılarak oluşturulmuştur.
        </p>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Projelerim</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Üzerinde çalıştığım tasarım ve araştırma projelerini buradan inceleyebilirsiniz.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Hakkımda</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Kullanıcı deneyimi ve veri analizi konusundaki yolculuğum hakkında bilgi edinin.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">İletişim</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Benimle iletişime geçmek için bu bölümü kullanabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
