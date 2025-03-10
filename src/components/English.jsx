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
                  <div class="grid grid-cols-2 max-[600px]:grid-cols-1 min-[700px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-4 min-[800px]:gap-8 p-4">

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
