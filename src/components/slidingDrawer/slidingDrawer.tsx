'use client'
import { useEffect, useState } from 'react';
import styles from './slidingDrawer.module.css';

interface FacilityInfo {
  facility: string;
  description: string;
  facilityClass: string;
}

const facilityData: FacilityInfo[] = [
  { facility: 'ABL', description: 'Advisory Bike Lane', facilityClass: 'Class 2'},
  { facility: 'BBBL', description: 'Bike Lane Buffered by Bus Lane', facilityClass: 'Class 2' },
  { facility: 'BL', description: 'Bike Lane', facilityClass: 'Class 2'},
  { facility: 'BBL', description: 'Buffered Bike Lane', facilityClass: 'Class 2'},
  { facility: 'ESR', description: 'Enhanced Shared Roadway', facilityClass: 'Class 3'},
  { facility: 'LSB', description: 'Local Service Bikeway', facilityClass: 'Class 3'},
  { facility: 'NG', description: 'Neighborhood Greenway', facilityClass: 'Class 1'},
  { facility: 'PBL', description: 'Protected Bike Lane', facilityClass: 'Class 4' },
  { facility: 'SBBL', description: 'Shared Bus-Bike Lane', facilityClass: 'Class 2'},
  { facility: 'SIR', description: 'Separated in-roadway', facilityClass: 'Class 4'},
  { facility: 'TRL', description: 'Off-Street Path/Trail', facilityClass: 'Class 1'},
];

const SlidingDrawer = ({open, toggleDrawer}: {open: boolean, toggleDrawer: () => void}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeContent} onClick={toggleDrawer}>Close</button>
      <div className={styles.drawerContent}>
        <h2 className={styles.drawerTitle}>Facility Key</h2>
        <table>
          <thead>
            <tr>
              <th>Facility</th>
              <th>Description</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {facilityData.map((item, index) => (
              <tr key={index}>
                <td>{item.facility}</td>
                <td>{item.description}</td>
                <td>{item.facilityClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlidingDrawer;