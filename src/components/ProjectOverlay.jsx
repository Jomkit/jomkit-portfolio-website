function ProjectOverlay({ children, header = "", footer = "", url = "#" }) {
  const content = (
    <div className="group relative overflow-hidden rounded border border-slate-200 bg-white">
      {children}
      {header && (
        <div className="absolute left-0 top-0 z-10 w-full bg-black/70 p-2 text-start text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          {header}
        </div>
      )}
      {footer && (
        <div className="absolute bottom-0 left-0 z-10 w-full bg-black/70 p-2 text-start text-sm text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          {footer}
        </div>
      )}
    </div>
  );

  if (url === "#") {
    return content;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700">
      {content}
    </a>
  );
}

export default ProjectOverlay;
