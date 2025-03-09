import React from 'react'
import News from './News'
import Spinner from './Spinner'

export default function English({loading, language, data}) {
  return (
    <div>
      <div>
        {
            loading?<Spinner />:(
                language === 'en' && (
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:mr-4'>
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
