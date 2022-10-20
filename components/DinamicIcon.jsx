import * as React from 'react'
import { IconContext } from "react-icons";
import loadable from "@loadable/component";

const DinamicIcon = ({ name, fill: color, size = '24px', className }) => {
  const [library, iconName] = name.split('/')

  const value = React.useMemo(() => ({
    color,
    size,
    className,
  }), [className, color, size])

  if (!library || !iconName) {
    return null
  }

  const Icon = loadable(() => import(`react-icons/${library}/index.js`), {
    resolveComponent: (el) =>
      el[iconName]
  });

  return (
    <IconContext.Provider value={value}>
      <Icon />
    </IconContext.Provider>
  );
}

export default DinamicIcon