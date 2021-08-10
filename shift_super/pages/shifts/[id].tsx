import Layout from "../../components/layout/layout";

import {getAllShiftIds, getShiftData} from "../../lib/shifts";

export default function shift(staticShift){
    return(<Layout>
        <div>
            <p>{staticShift.staticShift.category}</p>
            <p>{staticShift.staticShift.count}</p>
            <p>{staticShift.staticShift.date}</p>
        </div>
    </Layout>)
}

export async function getStaticPaths(){
    const paths =await getAllShiftIds()
    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps({params}){
    const staticShift =await getShiftData(params.id)
    // console.log(staticShift)
    return{
        props: {
            id:staticShift.id,
            staticShift
        },
        revalidate:3
    }

}