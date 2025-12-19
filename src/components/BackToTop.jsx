function BackToTop({ scroll }) {
  const progress = Math.min(100, Math.max(0, scroll));

  return (
    <a
      href="#home"
      className={`${progress > 5 ? "fixed" : "hidden"} bottom-20 -right-6`}
    >
      <div className="flex gap-2 items-center -rotate-90">
        <p className="font-bold uppercase text-primary-red text-sm tracking-widest">
          Back top
        </p>

        <div className="relative h-1 w-10 bg-primary-red overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </a>
  );
}

export default BackToTop;
