import AppBanner from '../appBanner/AppBanner1';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';


const MainPage = () => {
    const directory = useTypeSelector(state => state.userSlice.users);
    console.log(directory[0].id);
    return (
        <>
            <AppBanner />
            <nav className="h-full overflow-y-auto pt-8" aria-label="Directory">
                <ul role="list" className="relative z-0 divide-y divide-gray-200">
                    {directory.map((person: any) => (
                        <li key={person} className="bg-white" onClick={() => { console.log(person.id) }}>
                            <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <Link to="/patient" className="focus:outline-none">
                                        {/* Extend touch target to entire panel */}
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                        <p className="truncate text-sm text-gray-500">{person.role}</p>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
export default MainPage;