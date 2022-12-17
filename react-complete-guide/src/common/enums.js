const AdoptionStatus = {
    adopted : { 
        id:"adopted",
        name:"Adopted"
    },
    notAdopted : { 
        id:"notadopted",
        name:"Not Adopted"
    },
    duringAdoption : { 
        id:"duringadoption",
        name:"During Adoption"
    }
}

const mapStatusToEnum = (status)=>{
    if (status==AdoptionStatus.adopted.id)
      return AdoptionStatus.adopted
    if (status==AdoptionStatus.notAdopted.id)
      return AdoptionStatus.notAdopted
    if (status==AdoptionStatus.duringAdoption.id)
      return AdoptionStatus.duringAdoption
  }
  
export default AdoptionStatus