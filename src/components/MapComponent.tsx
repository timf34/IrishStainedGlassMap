import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useRef } from 'react';
import { LocationData } from '@/lib/data';
import { useRouter } from 'next/router';

type MapComponentProps = {
    locations: LocationData[];
};

const MapComponent: React.FC<MapComponentProps> = ({locations}) => {
    const router = useRouter();
    const mapRef = useRef<any>(null);

    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    // Define map properties
    const mapContainerStyle = {
        height: '100%',
        width: '100%',
    };

    const defaultCenter = {
        lat: 53.3498,
        lng: -6.2603
    };

    const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

    const onMarkerClick = (location: LocationData) => {
        setSelectedLocation(location);
    };

    const onMapLoad = (map: any) => {
        mapRef.current = map;
        map.addListener('click', () => {
            setSelectedLocation(null);
        });
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={defaultCenter}
                onLoad={onMapLoad}
            >
                {
                    locations.map((location: LocationData) => (
                        <Marker
                            key={location.id}
                            position={{
                                lat: location.coordinates.lat,
                                lng: location.coordinates.long
                            }}
                            onClick={() => onMarkerClick(location)}
                        />
                    ))
                }
                {
                    selectedLocation && (
                        <InfoWindow
                            position={{
                                lat: selectedLocation.coordinates.lat,
                                lng: selectedLocation.coordinates.long
                            }}
                        >
                            <div className="shadow-2xl" onClick={() => router.push(`/${selectedLocation.id}`)}>
                                <p className="text-xl text-center">{selectedLocation.artist}</p>
                                <img src={selectedLocation.imageUrl} alt={selectedLocation.name} className="w-32 h-32 object-cover" />
                            </div>
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
