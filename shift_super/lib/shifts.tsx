import fetch from "node-fetch"

// シフト一覧を取得
export async function getAllShiftData(){
    const res =await fetch(new URL(`http://127.0.1:8000/super/list-shift`))
    const shifts =await res.json();
    return shifts
}


//ここにフィルタリングをどのようにするかを決めるどのパラメータで送るのかを決める必要がある




// シフトのIDを取得
export async function getAllShiftIds(){
    const res =await fetch(new URL(`http://127.0.1:8000/super/list-shift`))
    const shifts =await res.json()
    return shifts.map((shift)=>{
        return{
            params:{
                id:String(shift.id)
            }
        }
    })
}

// シフト詳細を取得
export async function getShiftData(id){
    const res =await fetch(new URL(`http://127.0.1:8000/super/detail-shift/${id}/`))
    const shift =await res.json()
    return shift
}
