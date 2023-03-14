import Draggable from "react-draggable";

export function StickyNote(props) {
  return (
    <>
      <Draggable defaultPosition={props.position} key={props.key} nodeRef={props.nodeRef}>
        <div ref={props.nodeRef}>
          <props.color id={props.key}>
            {
              <div class="container">
                <img height="400vw" title={props.text} class="image" src={props.image} alt="notes" />

                <div class="overlay">
                  <div class="text">
                    <i>{props.text}</i>
                  </div>
                </div>
              </div>
            }
          </props.color>
        </div>
      </Draggable>
    </>
  );
}
