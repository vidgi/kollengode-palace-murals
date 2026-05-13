export function RulerLine() {
  return (
    <div aria-hidden="true" className="ruler">
      <div className="ruler-hairline" />
      <div className="ruler-ticks">
        {Array.from({ length: 800 }).map((_, i) => (
          <div key={i} className="ruler-tick" />
        ))}
      </div>
    </div>
  )
}
