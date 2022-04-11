import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

import ReviewList from '../../components/reviewList'
import ReviewForm from '../../components/reviewForm'
import Alert from '../../components/alert'
import useNotification from '../../hooks/useNotification'

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
    const [ notification, showNotification ] = useNotification();
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
        <>
            <Head>
				<title>{project.Name}</title>
			</Head>
            <Alert message={notification} />
            <main className='content'>               
                <h3 className='mb-8'>{project.Name}</h3>
                <div className='flex flex-col'>
                    <div className='flex flex-wrap justify-center gap-x-8'>
                        <div className='flex flex-col justify-center mb-4 space-y-4 max-w-md'>
                            <div>
                                {project.Description}
                            </div>
                            <div className='py-2 border-y-2 text-sky-600'>
                                {project.skills.join(' / ')}
                            </div>
                            <div className='flex place-content-center space-x-4'>
                                <a href={setHttp(project.url)} target='_blank' rel='noreferrer'>
                                    <button type='button' className='defaultButton'>View Live
                                    </button>
                                </a>
                                <a href={setHttp(project.githubUrl)} target='_blank' rel='noreferrer'>
                                    <button type='button' className='defaultButton'>View Code
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='p-6 mt-2 mb-2 border-2 rounded-lg h-min'>
                            <h4 className='text-2xl mb-8'>Leave a review</h4>      
                            <ReviewForm projectId={project._id} updateProject={setProject} notify={showNotification} />
                        </div>                   
                    </div>
                    <div className='p-4 shadow-lg rounded-lg bg-gray-100 text-gray-700 min-w-full max-w-fit'>
                        <h4 className='text-2xl font-semibold mb-2 text-center'>Reviews</h4>
                        <ReviewList reviews={project.Reviews} />
                    </div>
                </div>                                      
            </main>
         </>
    )
}

export default Project