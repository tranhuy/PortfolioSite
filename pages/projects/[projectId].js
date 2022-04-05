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
    const { data } = useSWR(projectId ? url : null, fetcher)

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
            <main className='content'>
                <h3 className='text-3xl font-bold mb-8'>{project.Name}</h3>
                <div>{project.Description}</div>
                <div><a href={setHttp(project.url)}>{project.url}</a></div>             
                <div><a href={setHttp(project.githubUrl)}>{project.githubUrl}</a></div>
                <div className='p-6 mt-2 mb-2 border-2 rounded-lg'>
                    <h4 className='text-2xl mb-8'>Leave a review</h4>      
                    <ReviewForm projectId={project._id} updateProject={setProject} />
                </div>
                <div className='review-list'>
                    <h4 className='text-2xl font-semibold mb-8'>Reviews</h4>
                    <ReviewList reviews={project.Reviews} />
                </div>                            
            </main>
            <style jsx global>{`
                .review-list {
                    width: 100%;
                }
                
                .review-form {
                    background-color: #D6E7EF;
                    width: 80%;
                    padding: 14px;
                    margin: 10px;
                    border-radius: 2%;
                }

                .review-form form {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                }
            `}       
            </style>
         </div>
    )
}

export default Project