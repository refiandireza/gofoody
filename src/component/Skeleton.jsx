import React from 'react'
import Skeleton from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <>
        <div className="group max-w-[250px] 2xl:max-w-[320px] shadow-md overflow-hidden rounded-md h-full w-full mx-2 sm:col-span-4 md:col-span-4 2xl:col-span-3">
                <figure className="h-[110px] lg:h-[160px] w-full overflow-hidden relative bg-slate-50">
                    <Skeleton className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 object-cover h-full w-full" />
                </figure>
                <div className="p-2 bg-slate-50">
                    <h3 className="text-sm truncate "><Skeleton/></h3>
                    <p className="text-xs pt-2"><Skeleton/></p>
                    <div className="flex flex-row items-center py-1">
                        <p className="ml-2 text-xs"><Skeleton/></p>
                    </div>
                </div>
        </div>

        <div className="group max-w-[250px] 2xl:max-w-[320px] shadow-md overflow-hidden rounded-md h-full w-full mx-2 sm:col-span-4 md:col-span-4 2xl:col-span-3">
                <figure className="h-[110px] lg:h-[160px] w-full overflow-hidden relative bg-slate-50">
                    <Skeleton className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 object-cover h-full w-full" />
                </figure>
                <div className="p-2 bg-slate-50">
                    <h3 className="text-sm truncate "><Skeleton/></h3>
                    <p className="text-xs pt-2"><Skeleton/></p>
                    <div className="flex flex-row items-center py-1">
                        <p className="ml-2 text-xs"><Skeleton/></p>
                    </div>
                </div>
        </div>

        <div className="group max-w-[250px] 2xl:max-w-[320px] shadow-md overflow-hidden rounded-md h-full w-full mx-2 sm:col-span-4 md:col-span-4 2xl:col-span-3">
                <figure className="h-[110px] lg:h-[160px] w-full overflow-hidden relative bg-slate-50">
                    <Skeleton className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 object-cover h-full w-full" />
                </figure>
                <div className="p-2 bg-slate-50">
                    <h3 className="text-sm truncate "><Skeleton/></h3>
                    <p className="text-xs pt-2"><Skeleton/></p>
                    <div className="flex flex-row items-center py-1">
                        <p className="ml-2 text-xs"><Skeleton/></p>
                    </div>
                </div>
        </div>

        <div className="group max-w-[250px] 2xl:max-w-[320px] shadow-md overflow-hidden rounded-md h-full w-full mx-2 sm:col-span-4 md:col-span-4 2xl:col-span-3">
                <figure className="h-[110px] lg:h-[160px] w-full overflow-hidden relative bg-slate-50">
                    <Skeleton className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 object-cover h-full w-full" />
                </figure>
                <div className="p-2 bg-slate-50">
                    <h3 className="text-sm truncate "><Skeleton/></h3>
                    <p className="text-xs pt-2"><Skeleton/></p>
                    <div className="flex flex-row items-center py-1">
                        <p className="ml-2 text-xs"><Skeleton/></p>
                    </div>
                </div>
        </div>
    </>
    
  )
}

export default SkeletonCard