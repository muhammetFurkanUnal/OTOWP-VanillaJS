
export class DeleteGroupsDTO {

  constructor(ids) {
    const dto = {groupIDs:[]};
    ids.forEach(id => {
      dto.groupIDs.push(id);
    });
    
    return dto;
  }

}