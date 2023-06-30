import classNames from 'classnames';

import { useLinkContext } from '../context/navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useLinkContext();

  const classes = classNames(
    'text-blue-500',
     className,
     currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metakey || event.ctrlKey) return;

    event.preventDefault();
    navigate(to)
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;