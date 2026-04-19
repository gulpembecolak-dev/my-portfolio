export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center bg-[#050505]">
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden backdrop-blur-md">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">About Me</h1>
        
        <div className="text-gray-400 text-lg">
          <p className="leading-relaxed mb-6">
            Hi, I'm Gülpembe. I am a passionate Interaction Designer dedicated to crafting digital experiences that seamlessly bridge the gap between human needs and technological possibilities. My journey in design is fueled by a relentless curiosity and a deep empathy for the end user.
          </p>
          <p className="leading-relaxed mb-6">
            Currently studying Interaction Design, I specialize in user research, prototyping, and UI design. I believe that good design is virtually invisible—it simply works. It guides users intuitively and removes friction.
          </p>
          <p className="leading-relaxed">
            When I'm not pushing pixels or conducting user interviews, you'll probably find me exploring the latest design trends or thinking about how to make everyday interactions just a little bit more delightful.
          </p>
        </div>
      </div>
    </main>
  )
}
