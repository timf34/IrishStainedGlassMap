import MapComponent from '../components/MapComponent';
import { locations } from '@/lib/data';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Locations</h1>
            <div className="w-full max-w-2xl h-96 rounded-md shadow-md overflow-hidden">
                <MapComponent locations={locations} />
            </div>
        </div>
    );
};

export default Home;