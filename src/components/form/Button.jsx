export default function Button({ clickEvent, text }) {
    return (
      <>
        <button onClick={clickEvent}>{text}</button>
      </>
    );
  }
  