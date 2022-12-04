import AppBanner from '../appBanner/AppBanner';
import { Link } from 'react-router-dom';
const directory = 
    [
        {
            id: 1,
            name: 'Angela Beaver',
            role: 'Diabetic pizedc',
            imageUrl:
                'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Yvette Blanchard',
            role: 'Diabetic pizedc',
            imageUrl:
                'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Lawrence Brooks',
            role: 'DiaBro',
            imageUrl:
                'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]

const MainPage = () => {
    return (
        <>
            <AppBanner />
            <nav className="h-full overflow-y-auto pt-8" aria-label="Directory">
                        <ul role="list" className="relative z-0 divide-y divide-gray-200">
                            {directory.map((person:any) => (
                                <li key={person.id} className="bg-white">
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