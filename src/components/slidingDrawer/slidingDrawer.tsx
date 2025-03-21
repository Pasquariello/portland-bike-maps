'use client'
import { useEffect, useState } from 'react';
import './slidingDrawer.css'; // Import the CSS for the drawer

interface FacilityInfo {
  facility: string;
  value: string;
  description: string;
  facilityClass: string;
}

const facilityData: FacilityInfo[] = [
  { facility: 'ABL', value: 'Advisory Bike Lane', description: 'Class 2', facilityClass: 'Bike Lane Class 2' },
  { facility: 'BBBL', value: 'Bike Lane Buffered by Bus Lane', description: 'Class 2', facilityClass: 'Bike Lane Class 2' },
  { facility: 'BL', value: 'Bike Lane', description: 'Class 2', facilityClass: 'Bike Lane Class 2' },
  { facility: 'BBL', value: 'Buffered Bike Lane', description: 'Class 2', facilityClass: 'Bike Lane Class 2' },
  { facility: 'ESR', value: 'Enhanced Shared Roadway', description: 'Class 3', facilityClass: 'Shared Roadway Class 3' },
  { facility: 'LSB', value: 'Local Service Bikeway', description: 'Class 3', facilityClass: 'Bikeway Class 3' },
  { facility: 'NG', value: 'Neighborhood Greenway', description: 'Class 1', facilityClass: 'Greenway Class 1' },
  { facility: 'PBL', value: 'Protected Bike Lane', description: 'Class 4', facilityClass: 'Bike Lane Class 4' },
  { facility: 'SBBL', value: 'Shared Bus-Bike Lane', description: 'Class 2', facilityClass: 'Bus-Bike Lane Class 2' },
  { facility: 'SIR', value: 'Separated in-roadway', description: 'Class 4', facilityClass: 'In-roadway Class 4' },
  { facility: 'TRL', value: 'Off-Street Path/Trail', description: 'Class 1', facilityClass: 'Path/Trail Class 1' },
];

const SlidingDrawer = ({open, toggleDrawer}: {open: boolean, toggleDrawer: () => void}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  return (
    <>
      {/* Sliding Drawer */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-content" onClick={toggleDrawer}>Close</button>
        <div className="drawer-content">
          <h2>Facility Key</h2>
          <table>
            <thead>
              <tr>
                <th>Facility</th>
                <th>Value</th>
                <th>Description</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {facilityData.map((item, index) => (
                <tr key={index}>
                  <td>{item.facility}</td>
                  <td>{item.value}</td>
                  <td>{item.description}</td>
                  <td>{item.facilityClass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SlidingDrawer;