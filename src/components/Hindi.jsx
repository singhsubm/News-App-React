import React from 'react'
import Spinner from './Spinner'
import News from './News'

export default function Hindi({loading, language, data}) {
  return (
    <div>
          <div>
            {
                loading?<Spinner />:(
                    language === 'hi' && (
                        <div className='grid grid-cols-2 max-[600px]:grid-cols-1 min-[700px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-4 min-[800px]:gap-8 p-4'>
                            {
                                data.map((news) => (
                                    
                                        <News news={news} key={news.url}/>
                                ))
                            }
                        </div>
                    )
                )
            }
          </div>
        </div>
  )
}
