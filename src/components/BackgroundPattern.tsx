function BackgroundPattern() {
  return (
    <div className="absolute inset-0 bg-primary-light-mode dark:bg-primary-dark-mode -z-10">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Decorative shapes */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400 opacity-10 dark:opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-400 opacity-10 dark:opacity-5 blur-3xl translate-y-1/2 -translate-x-1/2"></div> */}
    </div>
  );
}

export default BackgroundPattern;
