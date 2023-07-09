import MapComponent from '../components/MapComponent';
import { locations } from '@/lib/data';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 z-10">Irish Stained Glass Map</h1>
            <div className="flex items-center justify-center w-full max-w-5xl my-8 h-[80vh] rounded-md shadow-xl overflow-hidden">
                <MapComponent locations={locations} />
            </div>
            <footer className="text-xl z-15"><a href="https://timfarrelly.com/">Created by Tim</a></footer>
        </div>
    );
};

export default Home;
