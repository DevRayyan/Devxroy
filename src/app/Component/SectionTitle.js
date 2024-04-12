import React from 'react'

const SectionTitle = ({ indicator = false, title = 'Section Title', para,h1Class,containerClass,indicatorClr='bg-emerald-500',indicatorOverlay='bg-emerald-500/20' }) => {
    return (
        <div className={`mt-8 mb-7 flex items-center gap-x-1.5 ${containerClass}`}>
            {
                indicator &&
                <div className={`flex-none rounded-full ${indicatorOverlay} p-1`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${indicatorClr}`}></div>
                </div>
            }
            {title &&

                <h1 className={` text-slate-100 whitespace-nowrap ${h1Class}`}>{title}</h1>
            }
            {para &&

                <p className='text-slate-400 text-xs '>{para}</p>
            }
        </div>
    )
}

export default SectionTitle