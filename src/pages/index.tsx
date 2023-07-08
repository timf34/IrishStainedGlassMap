import MapComponent from '../components/MapComponent';
import { locations } from '@/lib/data';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Locations</h1>
            <MapComponent locations={locations} />
        </div>
    );
};

export default Home;
