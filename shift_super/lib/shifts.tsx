import fetch from "node-fetch"

// シフト一覧を取得
export async function getAllShiftData(){
    const res =await fetch(new URL(`${process.env.SERVERURL}/super/list-shift`))
    const shifts =await res.json();
    return shifts
}


// シフトのIDを取得
export async function getAllShiftIds(){
    const res =await fetch(new URL(`${process.env.SERVERURL}/super/list-shift`))
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
    const res =await fetch(new URL(`${process.env.SERVERURL}/super/detail-shift/${id}/`))
    const shift =await res.json()
    return shift
}
