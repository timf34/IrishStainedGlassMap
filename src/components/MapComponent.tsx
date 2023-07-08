import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { LocationData } from '@/lib/data';
import { useRouter } from 'next/router';

type MapComponentProps = {
    locations: LocationData[];
};

const MapComponent: React.FC<MapComponentProps> = ({locations}) => {
    const router = useRouter();

    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    console.log("GMaps API Key: " + GOOGLE_MAPS_API_KEY);

    // Define map properties
    const mapContainerStyle = {
        height: '100vh',
        width: '100vw',
    };

    const defaultCenter = {
        lat: 53.3498,
        lng: -6.2603
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={defaultCenter}>
                {
                    locations.map((location: LocationData) => (
                        <Marker
                            key={location.id}
                            position={{
                                lat: location.coordinates.lat,
                                lng: location.coordinates.long
                            }}
                            onClick={() => router.push(`/location/${location.id}`)}
                        />
                    ))
                }
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
