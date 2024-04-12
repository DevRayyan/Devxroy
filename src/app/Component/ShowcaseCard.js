'use client'

import React from 'react'

const ShowcaseCard = ({ title, titleClr, tagLine, status = 'public', tags = [], libTags, urlPath, pointShadow, pointBg, imgPath, timeStamp }) => {
    return (
        <div className='border border-zinc-800 mb-3  rounded-sm'>
            <div className='bg-zinc-900 flex justify-between items-center  p-3 '>

                <div className='flex items-center gap-3 '>
                    <div className={`flex-none rounded-full ${pointShadow} p-1`}>
                        <div className={`h-1.5 w-1.5 rounded-full ${pointBg}`}></div>
                    </div>
                    <div className='flex items-center flex-wrap  gap-3'>
                        <h1 className='text-md text-slate-200 text-xs'><span className={titleClr}>{title} | </span>{tagLine}</h1>

                        <div className='flex flex-wrap gap-2 '>
                            {tags.map((tag,i) => {

                                return <div key={i} className='text-xs text-slate-400 px-3 py-1 bg-zinc-800 rounded-sm'>{tag}</div>
                            })}

                            {libTags &&
                                <div className='text-xs text-slate-400 px-3 py-1 bg-zinc-800 rounded-sm'><span className={titleClr}> LIBRARY | </span>
                                    {libTags}
                                </div>
                            }

                        </div>
                    </div>
                </div>
                <div className='min-w-9 min-h-9'>
                    {status == 'public' &&
                        <a href={urlPath} target='_blank' className='flex justify-center items-center rounded-md min-w-9 min-h-9 bg-zinc-800 text-slate-200'><i className='fa-light text-xs fa-share'></i></a>
                    }
                </div>

            </div>

            <div className='relative  '>
                {
                    status != 'public' &&
                    <div className='absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-50 backdrop-blur-lg flex justify-center items-center text-zinc-300 text-xs text-center'>
                        Access to this project is restricted. <br/> Please contact the owner for permission to view.
                    </div>
                }
                <img className='w-full' src={imgPath} alt='image'/>
                <div className='absolute bottom-3 right-3 bg-zinc-900 text-xs  px-3 py-2 text-zinc-400 rounded-md '>{timeStamp}</div>
            </div>
        </div>)
}

export default ShowcaseCard