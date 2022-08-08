import { IconContext } from "react-icons";
import loadable from "@loadable/component";

const DynamicIcon = ({ name, fill: color, size = '24px', className }) => {
  const [library, iconName] = name.split('/')

  if (!library || !iconName) {
    return null
  }

  const Icon = loadable(() => import(`react-icons/${library}/index.js`), {
    resolveComponent: (el) =>
      el[iconName]
  });

  const value = {
    color,
    size,
    className,
  }

  return (
    <IconContext.Provider value={value}>
      <Icon />
    </IconContext.Provider>
  );
}

export default DynamicIcon