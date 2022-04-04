import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

import ReviewList from '../../components/reviewList'
import ReviewForm from '../../components/reviewForm'

const fetcher = async url => {
    const response = await fetch(url);
    return response.json();
}

const setHttp = url => {
    if (url.search(/^http[s]?\:\/\//) == -1) {
        url = 'http://' + url;
    }
    
    return url;
  }

const Project = () => {
    const [ project, setProject ] = useState(null);
    const router = useRouter();
    const { projectId } = router.query;
    const url = `/api/projects/${projectId}`;
    const { data } = useSWR(url, fetcher)
    
    useEffect(() => {
        if (data) {
            setProject(data);
        }
    }, [data]);

    if (!project) {
        return null;
    } 

    return (
        <div>
            <Head>
				<title>{project.Name}</title>
			</Head>
            <main className='container'>
                <h2>{project.Name}</h2>
                <div>{project.Description}</div>
                <div><a href={setHttp(project.url)}>{project.url}</a></div>             
                <div><a href={setHttp(project.githubUrl)}>{project.githubUrl}</a></div>
                <div className='review-form'>
                    <h3>Leave a review</h3>      
                    <ReviewForm projectId={project._id} updateProject={setProject} />
                </div>
                <div className='review-list'>
                    <h3>Reviews</h3>
                    <ReviewList reviews={project.Reviews} />
                </div>                            
            </main>
            <style jsx>{`
                .review-list {
                    width: 100%;
                }
                
                .review-form {
                    background-color: #D6E7EF;
                    padding-bottom: 10px;
                    padding-right: 10px;
                    padding-left: 10px;
                    margin: 10px;
                }
            `}       
            </style>
         </div>
    )
}

export default Project