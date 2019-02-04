import "../scss/components/oneScroll.scss";
export const OneScroll = props => {
  const className = props.className;
  return (
    <div className={`OneScroll ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};
