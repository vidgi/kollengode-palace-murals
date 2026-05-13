import React from 'react'
import type { MuralItem } from './sticky-data'

type StickyNoteProps = MuralItem & { index: number }

export function StickyNote({ id, color: ColorWrapper, image, text, yOffset, index }: StickyNoteProps) {
  const marginTop = `${yOffset * 100}vh`
  const side: 'top' | 'bottom' = index % 2 === 0 ? 'bottom' : 'top'

  return (
    <div
      className="mural-item"
      style={{ marginTop, flexShrink: 0, ['--delay']: `${index * 35}ms` } as React.CSSProperties}
    >
      <ColorWrapper id={String(id)}>
        <div className={`container annotation-${side}`}>
          <img className="image" title={text} src={image} alt={text || 'mural'} />
          {text && (
            <div className="annotation">
              <div className="annotation-line" />
              <div className="annotation-label">{text}</div>
            </div>
          )}
        </div>
      </ColorWrapper>
    </div>
  )
}
