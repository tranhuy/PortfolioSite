import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import clientPromise from '../../utils/mongodb'

const ProjectItem = ({ project }) => {
    return (       
        <div className='relative group rounded-lg shadow-lg bg-white w-56 h-64 p-2 overflow-hidden transform duration-500 ease-in-out hover:bg-sky-900'> 
            <div className='transform duration-500 ease-in-out group-hover:opacity-0'>
                <Image src={`/images/${project.PreviewImageName}`} alt='Project Preview Image' width='100%' height='100%' objectFit='contain' layout='responsive' /> 
            </div>
            <div className='absolute p-2 inset-x-0 inset-y-5/6 transform duration-500 ease-in-out group-hover:inset-y-2'>
                <h5 className='truncate text-gray-900 text-xl font-medium mb-2 group-hover:text-white'>{project.Name}</h5>
                <p className='text-gray-700 h-[7.5rem] text-sm mb-6 line-clamp-6 group-hover:text-white'>{project.Description}</p>
                <div className='text-center'>
                    <Link href={`/projects/${project._id}`} passHref>
                        <button type='button' className='inline-block 
                            px-6 py-2.5 
                            bg-blue-600 
                            text-white 
                            font-medium 
                            text-xs 
                            leading-tight 
                            rounded 
                            shadow-md 
                            hover:bg-blue-700 hover:shadow-lg 
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                            active:bg-blue-800 active:shadow-lg 
                            transition duration-150 ease-in-out'>More Info
                        </button>
                    </Link>
                </div>               
            </div>  
        </div>      
    );
}

const ProjectList = ({ projects }) => {
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <main className='content'>
                <h3 className='text-3xl font-bold mb-8'>My Projects</h3>
                <div className='flex flex-wrap justify-center gap-5'>
                    {projects.map(project => 
                        <ProjectItem key={project._id} project={project} />)}
                </div>
            </main>
        </div>
    )
}

export default ProjectList

export async function getStaticProps() {
    const client = await clientPromise;

    const db = client.db('db_Portfolio');
    const projects = await db.collection('projects').find({}).toArray();

    return {
        props: { 
            projects: JSON.parse(JSON.stringify(projects))
        }
    }
}