
import { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api'
import './style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/UseFetch'
import DetailsBanner from './detailBanner/DetailBanner'
import Cast from './cast/Cast'

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
    </div>
  )
}

export default Detail