import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const IconBtn = ({ url, target, icon, color, size, className }) => {
  console.info(url, size, className);
  return (
    <a href={url} target="_blank">
      <FontAwesomeIcon
        icon={icon}
        color={color}
        size="5x"
        className={className}
      />
    </a>
  );
};
