export const SalonShimmer = () => {
    const shimmerCards = [1, 2, 3, 4, 5, 6];

    return (
        <div className="bg-[#F7F4EF] min-h-screen font-semibold">
            <div className="profileBar p-[2rem]">

                <div className="navbar flex items-center justify-between">
                    <div className="h-7 w-24 rounded bg-gray-300 animate-pulse"></div>

                    <div className="h-7 w-40 rounded bg-gray-300 animate-pulse"></div>
                </div>

                <div className="searchSalons pt-[2rem] flex flex-col gap-4">
                    <div className="h-8 w-72 rounded bg-gray-300 animate-pulse"></div>

                    <div className="h-5 w-96 rounded bg-gray-300 animate-pulse"></div>

                    <div className="h-14 w-full rounded-xl bg-gray-300 animate-pulse"></div>
                </div>

                <div className="flex flex-wrap">
                    {shimmerCards.map((item) => (
                        <div
                            key={item}
                            className="max-w-[20rem] w-full m-[2rem] bg-white rounded-xl overflow-hidden"
                        >
                            <div className="h-48 w-full bg-gray-300 animate-pulse"></div>

                            <div className="p-[1rem] flex flex-col gap-3">
                                <div className="h-6 w-3/4 rounded bg-gray-300 animate-pulse"></div>

                                <div className="h-4 w-1/2 rounded bg-gray-300 animate-pulse"></div>

                                <div className="h-4 w-2/3 rounded bg-gray-300 animate-pulse"></div>
                            </div>

                            <div className="p-[1rem]">
                                <div className="h-10 w-full rounded-xl bg-gray-300 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};