import fetch from "node-fetch"

// シフト一覧を取得
export async function getAllShiftData(){
    const res =await fetch(new URL(`${process.env.SERVERURL}/super/list-category`))
    const categoryes =await res.json();
    return categoryes
}


// シフトのIDを取得
export async function getAllShiftIds(){
    const res =await fetch(new URL(`${process.env.SERVERURL}/super/list-category`))
    const categoryes =await res.json()
    return categoryes.map((category)=>{
        return{
            params:{
                id:String(category.id)
            }
        }
    })
}

// シフト詳細を取得
export async function getShiftData(id){
    const res =await fetch(new URL(`${process.env.SERVERURL}/super/detail-category/${id}/`))
    const category =await res.json()
    return category
}
