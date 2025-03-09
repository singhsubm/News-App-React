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
                        <div className='grid grid-cols-4 gap-8 p-4 mr-4'>
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
