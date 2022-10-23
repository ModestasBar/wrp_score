import { Drawer } from '@mui/material';
import SectionDetails from './Section/SectionDetails';
import SectionQueue from './Section/SectionQueue';
import SectionSettings from './Section/SectionSettings';

import { styles } from './SidebarControl.styles';

const SidebarControl = () => {
  return (
    <Drawer variant="permanent" sx={styles.drawer}>
      <SectionSettings />
      <SectionDetails />
      <SectionQueue />
    </Drawer>
  );
};

export default SidebarControl;
