import axios from 'axios'
import React, {useState, useEffect} from 'react';
export const useAxios = (url, dependencies) => {

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get(url).then((res) => {
    //         setIsLoading(false);
    //         setResponse(res);
    //         console.log('success is ' + JSON.stringify(res))
    //     }).catch((err) => {
    //         console.log('error is ' + JSON.stringify(err))
    //         setIsLoading(false);
    //         setError(err);
    //     });
    // }, [url]);
    return [isLoading, response, error];
};

function HookUseCustomAxios() {

    // let url = 'http://api.douban.com/v2/movie/in_theaters';
    let url = '/cityjson'
    const [isLoading, response, error] = useAxios(url, []);
    return (
        <div>
            {isLoading ? <div>loading...</div> :
                (error ? <div> There is 1 an error happened error  </div> : <div> Success, {JSON.stringify(response)} </div>)}
        </div>
    )
}

export default HookUseCustomAxios;