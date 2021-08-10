import fetch from "node-fetch"

// シフト一覧を取得
export async function getAllCategoryData(){
    const res =await fetch(new URL(`http://127.0.1:8000/super/list-category`))
    const categoryes =await res.json();
    return categoryes
}


// シフトのIDを取得
export async function getAllCategoryIds(){
    const res =await fetch(new URL(`http://127.0.1:8000/super/list-category`))
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
export async function getCategoryData(id){
    const res =await fetch(new URL(`http://127.0.1:8000/super/detail-category/${id}/`))
    const category =await res.json()
    return category
}
