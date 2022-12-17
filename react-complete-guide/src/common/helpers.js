import AdoptionStatus from "./enums"

const mapStatusToEnum = (status)=>{
  if (status==AdoptionStatus.adopted.id)
    return AdoptionStatus.adopted
  if (status==AdoptionStatus.notAdopted.id)
    return AdoptionStatus.notAdopted
  if (status==AdoptionStatus.duringAdoption.id)
    return AdoptionStatus.duringAdoption
}
  
export default mapStatusToEnum