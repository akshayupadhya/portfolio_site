import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const socialIconColor = "#fff";
export const IconBtn = ({ url, target, icon, color, size, className }) => {
  return (
    <a href={url} target="_blank">
      <FontAwesomeIcon
        icon={icon}
        size="5x"
        className={className}
        color={socialIconColor}
      />
    </a>
  );
};
