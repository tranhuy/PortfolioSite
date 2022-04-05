import Head from 'next/head'
import Link from 'next/link'

import clientPromise from '../../utils/mongodb'

const ProjectItem = ({ project }) => {
    return (       
        <div>
            <Link href={`/projects/${project._id}`} passHref>
                <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-sky-700 hover:text-white hover:cursor-pointer'>
                    <p>{project.Name}</p>
                </div>
            </Link>
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
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
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