
import LeafMapContainer from '@/components/leaflet/MapContainer';
import Link from 'next/link';
import './main.css';

export default function Home() {

  return (
    <>
      
      <div className='home-hero'>
        {/* Content */}
        <header className='hero-content'>

          <h1 style={{ color: '#FFF', fontWeight: 300, marginBottom: 20, fontSize: 66}}>Biking in Portland</h1>

          <h3 style={{ color: '#FFF', fontWeight: 400, fontSize: 22}}>Pedal Power: Cruisin&apos; Through Portland, One Bike Lane at a Time!</h3>

          <p style={{color: '#Eae8e9'}}>
            There&apos;s no better way to experience Portland&apos;s unique vibe than by cruising down its miles of bike lanes. From the bustling streets downtown to the peaceful paths along the river, every ride is an opportunity to soak in the city&apos;s sights and sounds. Whether you&apos;re on your commute to work or school, running errands around town, or just looking for a leisurely ride, Portland&apos;s bike lanes make it easy to explore at your own pace.
          </p>
        </header>
      </div>
      <section className="body-content">

      <h1 style={{fontSize: 44}}>Bike Facility Map</h1>

        <LeafMapContainer />
        <p style={{fontSize: 12}}>Data Source: <Link style={{color:'#FBAD18' }} href="https://www.portlandmaps.com/metadata/index.cfm?&action=DisplayLayer&LayerID=53123">Portland Map Bicycle Network</Link></p> 
      </section>
      
    </>

  )

}
