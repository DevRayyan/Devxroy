'use client'

const Card = ({ title, subTitle, textColor, present, presentTag = 'Continue', anotherLine }) => {
    return (
        <div className={`category-card relative text-slate-100 max-w-sm rounded  shadow-lg`}>
            {present &&

                <div className='absolute top-3   bg-teal-900 rounded-md text-teal-300 px-2.5 py-1 right-4 text-xs ' >
                    {presentTag}
                </div>
            }
            <div className='p-5 rounded-lg card-content border border-slate-800'>
                <h6 className={`${textColor}`}>
                    {title}
                </h6>
                {anotherLine && <p className='text-xs text-slate-200'>{anotherLine}</p>}
                <p className='text-xs text-slate-400'>{subTitle}</p>

            </div>
        </div>
    );
};

export default Card