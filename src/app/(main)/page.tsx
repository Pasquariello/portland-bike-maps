
import LeafMapContainer from '@/components/leaflet/MapContainer';

export default function Home() {

  return (
    <>
      
      <div style={{ backgroundImage: `url('/blob-scene-haikei.svg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', paddingTop: 120, paddingBottom: 120, marginBottom: 120}}>
        {/* Content */}
        <div 
          style={{
            width: '770px', textAlign: 'center', 
            margin: 'auto'
          }}
          >

        <h1 style={{ color: '#FFF', fontWeight: 300, marginBottom: 20, fontSize: 66}}>Biking in Portland</h1>

        <h3 style={{ color: '#FFF', fontWeight: 400, fontSize: 22}}>Pedal Power: Cruisin' Through Portland, One Bike Lane at a Time!</h3>

        <p style={{color: '#Eae8e9'}}>
          There&apos;s no better way to experience Portland&apos;s unique vibe than by cruising down its miles of bike lanes. From the bustling streets downtown to the peaceful paths along the river, every ride is an opportunity to soak in the city&apos;s sights and sounds. Whether you&apos;re a seasoned cyclist or just looking for a leisurely ride, Portland&apos;s bike lanes make it easy to explore at your own pace.
        </p>
        </div>
      </div>
      <section style={{margin:'0 120px'}}>

      <h1 style={{fontSize: 44}}>Bike Facility Map</h1>

        <LeafMapContainer /> 
      </section>
      
    </>

  )

}
