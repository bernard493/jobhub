import React,{useEffect,useState} from 'react'
import axios from 'axios'

interface queryInter {
    query:string
    page? :string
    num_pages?:string
}

export const useFetch = (endpoint:string,query:queryInter) => {
      const [data ,setData] = useState([])
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError]  = useState(null)

      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '680d731b90msh815c11d4ec7c9ccp1776d5jsnd8245dd120a9',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };


      const fetchData = async () => {
        setIsLoading(true);
    
        try {
          const response = await axios.request(options);
    
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
        //   setError(error);
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
    
      return { data, isLoading, error, refetch };
  
}
