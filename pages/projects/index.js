import Head from 'next/head'
import Link from "next/link"

import clientPromise from '../../utils/mongodb'

const ProjectList = ({ projects }) => {

    return (
        <div className='container'>
        <Head>
            <title>Projects</title>
        </Head>
        <main>
            <h2>My Projects</h2>
            {projects.map(project => 
                <div key={project._id}><Link href={`projects/${project._id}`}>{project.Name}</Link></div>)}
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