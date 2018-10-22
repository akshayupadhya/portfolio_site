import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const IconBtn = (prop)=>(
  <a href={prop.url} target={prop.target}>
    <FontAwesomeIcon
      icon={prop.icon}
      color={prop.color}
      size={`${prop.size}x`}
      className={prop.className}
    />
  </a>
)