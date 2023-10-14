
import { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api'
import './style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/UseFetch'
import DetailsBanner from './detailBanner/DetailBanner'
import Cast from './cast/Cast'
import VideosSection from './video/Video'
import Similar from './carousel/Similer'
import Recommendation from './carousel/Recomended'

const Detail = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );
 
 
  // const apis = () => {
  //    fetchData(`/movie/${params.id}`)
  //    .then(res =>  console.log(res))
  // }

  // useEffect(() => {
  //    apis()
  // })


  return (
    <div>
           <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
           <Cast data={credits?.cast} loading={creditsLoading} />
           <VideosSection data={data} loading={loading} />
           <Similar mediaType={mediaType} id={id} />
           <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Detail