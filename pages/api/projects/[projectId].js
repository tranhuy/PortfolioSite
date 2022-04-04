import { ObjectId } from "mongodb";
import clientPromise from "../../../utils/mongodb";
import { format } from 'date-fns';

const formatDate = (strDate) => {
    const date = new Date(strDate); 
    return format(new Date(date.getFullYear(),  date.getMonth(), date.getDate()), 'yyyy-MM-dd');
};

const handler = async (req, res) => {
    const { projectId } = req.query;
    const client = await clientPromise;
    const db = client.db('db_Portfolio');

    switch (req.method) {
        case 'GET':
            const project = await db.collection('projects').findOne({ _id: ObjectId(projectId) });
            res.status(200).json(project);
            break;
        case 'PUT':
            const { name, review } = JSON.parse(req.body);
            const newReview = {
                Author: name,
                Review: review,
                CreationTime: formatDate(Date.now())
            }

            const query = { '_id': ObjectId(projectId) };
            const updateDocument = {
                $push: { 'Reviews': newReview }
            }

            const result = await db.collection('projects').findOneAndUpdate(query, updateDocument, { returnDocument: 'after' });
            res.status(200).json(result.value);
            break;  
    }
}

export default handler;