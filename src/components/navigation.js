import React from 'react';
import { Link } from '@reach/router';

import '../styles/navigation.css';

const NavLink = (props) => (
  <li>
    <Link
      {...props}
      getProps={({ isCurrent }) => ({ className: isCurrent ? 'activemenu' : '' })}
    />
  </li>
);

const navMenuItems = [
  { name: 'Процессоры', link: 'processors' },
  { name: 'Видеокарты', link: 'videocards' },
  { name: 'Материнские платы', link: 'mainboards' },
  { name: 'ОЗУ', link: 'memories' },
  { name: 'Устройства', link: 'devices' },
];

const Navigation = () => (
  <div id="navmenu">
    <nav>
      <ul>
        {navMenuItems.map((item) => (
          <NavLink key={item.link} to={item.link}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navigation;
